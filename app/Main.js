import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'; 
import LoveJobsWebFrame from './views/Frame.js'

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
  <LoveJobsWebFrame/>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
