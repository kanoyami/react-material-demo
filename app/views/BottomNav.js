import React from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import ActionHome from 'material-ui/svg-icons/action/home';
import ImageCamera from 'material-ui/svg-icons/image/camera';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const homeIcon =<ActionHome /> ;
const exploreIcon = <ImageCamera />;

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNav extends React.Component {

  constructor(props){
    super(props);
    if(this.props.url=="/social")
      this.state={selectedIndex:1};
    else
      this.state={selectedIndex:0};

  }

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper style = {{zIndex:10,position:"fixed",bottom:0,width:'100%',height:'49px'}} zDepth={2}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            icon={homeIcon}
            onTouchTap={() => {this.select(0);this.props.locate('/')}}/>
          <BottomNavigationItem
            icon={exploreIcon}
            onTouchTap={() => {this.select(1);this.props.locate('/social')}}/>
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNav;