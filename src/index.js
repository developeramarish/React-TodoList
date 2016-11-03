import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Menu from './components/Menu';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import TodoGrid from './components/TodoGrid';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <Router history={browserHistory}> 
  	<Route path="/" component={App} >
  		<IndexRoute component={TodoGrid} />
  	</Route> 
  	<Route path="/account" component={App} >
  	</Route> 
  </Router>, // declaramos a rota do nosso sistema e o history
  document.getElementById('root')
);
