import React from 'react';
import ReactDOM from 'react-dom';
import ViewList from './controller/GetListController.js'
import MoreInfo from  './views/MoreInfo.js'
import LoveJobsWebFrame from './views/Frame.js'


class Home extends React.Component{
	render(){
		if (typeof(this.props.match.params['id'])=="undefined" )
			var id = true;
		else
			var id = false;
		//console.log (this.props)
		var locate = this.props.history.push;

		return  <div> <LoveJobsWebFrame locate = {locate} /> { id ?  <ViewList/>  : <MoreInfo id = {this.props.match.params.id}/>} </div>
	}
}

export default Home;
