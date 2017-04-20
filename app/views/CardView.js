import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class CardView extends React.Component {

constructor(props) {
    super(props);
  }

render(){
  return(
  <Card>
    <CardHeader
      title={this.props.data.title}
      subtitle={this.props.data.subtitle}
      actAsExpander={true}
      showExpandableButton={true} />
    <CardActions>
      <FlatButton label="More" />
      <FlatButton label="Ignore" />
    </CardActions>
    <CardText expandable={true}>
    {this.props.data.content}
    </CardText>
  </Card>
  );
}
}

export default CardView;