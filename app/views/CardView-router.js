import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const CardView=(props,match)=>{
return(
  
	<Card>
    <CardHeader
      title={props.data.title}
      subtitle={props.data.content}/>
    <CardActions>
    <Link to={'/'+props.data.id}>
      <FlatButton label="More"/>
    </Link>
    </CardActions>
  </Card>
  );
  }

export default CardView;