import React from 'react';
import CardView from '../views/CardView.js'


export default class ViewList extends React.Component {
constructor(props) {
    super(props);
    this.state = {datas:[]};
  }
componentDidMount = ()=>{
	fetch('./datas.json')
	.then(response => response.json())
	.then(results => {
		console.log(results);
		this.setState({datas:results})
	})
  	.catch(e => console.log("Oops, error", e))
}

render(){
	return (
		<div>
		{this.state.datas.map((data) =>
        <CardView key={data.id} data={data} />)}
		</div>
	)

}

}