import React from 'react';
import CardView from '../views/CardView-router.js';
export default class ViewList extends React.Component {

constructor(props) {
    super(props);
    this.state = {datas:[]};
  }

componentWillMount = ()=>{
	fetch('./datas.json')
	.then(response => response.json())
	.then(results => {
		//console.log(results);
		this.setState({datas:results})
	})
  	.catch(e => console.log("Oops, error", e))
}

render(){

	return (
		<div style={{paddingTop:'64px'}}>
		{this.state.datas.map((data) =>
        <CardView key={data.id} data={data} />)}
        </div>
	)

}

}