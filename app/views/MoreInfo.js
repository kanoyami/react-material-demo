 import React from 'react';
 import PubSub from 'pubsub-js'


class MoreInfo extends React.Component {
	constructor(props){
		super(props);
	}
componentDidMount = () =>{
	PubSub.publish('infomations',1);
}

	render(){
		return(<h1>{this.props.id}</h1>)
	}
}

export default MoreInfo;