import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import LoveJobsWebFrame from './views/Frame.js';
import ViewList from './controller/GetListController.js';
import MoreInfo from  './controller/MoreInfoController.js'
import SocialViewList from './controller/GetSocialListController.js'

export default class MainRouter extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
	var locate = this.props.history.push;

		return (
  <div>
  	<LoveJobsWebFrame url ={this.props.match.url} locate = {locate} />
    <Route exact path={'/'} component={ViewList}/>
    <Route exact path={'/home/:id?'} component={MoreInfo}/>
    <Route exact path={'/social'} component={SocialViewList}/>
  </div>)
	}
}