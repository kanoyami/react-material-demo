import React from 'react';
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import MainRouter from './Main-router.js'
import injectTapEventPlugin from 'react-tap-event-plugin'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

class App extends React.Component{
    render(){
        return(
  <MuiThemeProvider>         
  <Router>
    <div>
    <Route exact path="/" component={MainRouter}/>
    <Route path={'/home/:id?'} component={MainRouter}/>
    <Route path={'/social'} component={MainRouter}/>
    </div>
  </Router>
  </MuiThemeProvider>              
        )
    }
}


render((
<App/>
), document.getElementById('root'))