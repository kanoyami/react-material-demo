import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {
  BrowserRouter as Router,
  Route,
  Link,
  history
} from 'react-router-dom';
import PubSub from 'pubsub-js'
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import BottomNav from './BottomNav.js'

export default class LoveJobsWebFrame extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false,switcher:""}

  }
  componentDidMount = () => {
    this.publis_token =  PubSub.subscribe('infomations',(e,d)=>{
      this.setState({switcher:d});
    });
  }

  switchIcon = (e) =>{
    switch(e){
              case 1 :
                return <IconButton><NavigationClose /></IconButton>;
              default:
                return <IconButton><NavigationMenu /></IconButton>;
            }
  }

  switchActive = (e) =>{
    switch(e){
              case 1 :
                return ()=> {this.props.locate('/');this.setState({switcher:""})};
              default:
                return this.handleToggle;
            }
  }
  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    return (
     <div> 
        <AppBar 
          title="LoveJobs-Demo"
          iconElementLeft={this.switchIcon(this.state.switcher)}
          onLeftIconButtonTouchTap = {this.switchActive(this.state.switcher)}
          style={{position:'fixed'}}/>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>
            <MenuItem onTouchTap={this.handleClose}>Menu Item</MenuItem>
            <MenuItem onTouchTap={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
        <BottomNav url = {this.props.url} locate = {this.props.locate}/>
      </div>
 
    );
  }
}
