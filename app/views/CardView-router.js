import React from 'react';
import {Card, CardActions, CardHeader,CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const CardView=(props,match)=>{
return(

	<Card style={{marginBottom:'4px'}}>
    <CardTitle title={props.data.title} subtitle={props.data.type}/>
    <CardActions>
    <CardText>{props.data.content}</CardText>
    <div style={{height:'45px'}}>
    <Link to={'/home/'+props.data.id}>
    <RaisedButton style={{float:'right',marginRight:'12px'}} primary={true}  label="more"/>
    </Link>
    </div>
    </CardActions>
  </Card>
  );
  }

export default CardView;