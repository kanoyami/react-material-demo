import React from 'react';
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Home from './Home.js'
import injectTapEventPlugin from 'react-tap-event-plugin'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

class App extends React.Component{
    render(){
        return(
  <MuiThemeProvider>         
  <Router>
    <Route path="/:id?" component={Home}/>
  </Router>
  </MuiThemeProvider>              
        )
    }
}


render((
<App/>
), document.getElementById('root'))