import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import Section from './Section';
import Login from './Login';
import ListEmpresas from './components/ListEmpresas';
import Layout from './components/layout/Layout';
import './index.css';

// using an ES6 transpiler, like babel
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  (
  	<Router history={browserHistory}>
		<Route path="/" component={Login} />
    	<Route path="/admin" component={Layout}>
    		<IndexRoute component={ListEmpresas} />
    		<Route path="questionario" component={ListEmpresas} />
    		<Route path="empresa/questionario" component={ListEmpresas} />
    		<Route path="empresa/questionario/novo" component={ListEmpresas} />
    	</Route>
    </Router>
    ),
  document.getElementById('root')
);
