import React from 'react';
import ReactDOM from 'react-dom';
import Section from './Section';
import Login from './Login';
import ListEmpresas from './components/ListEmpresas';
import Layout from './components/layout/Layout';
import './index.css';
import NovaEmpresa from './components/NovaEmpresa';
import QuestionariosEmpresa from './components/QuestionariosEmpresa';
import NovoQuestionario from './components/NovoQuestionario';
import NovaPergunta from './components/NovaPergunta';
// using an ES6 transpiler, like babel
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Relatorio from './components/Relatorio';
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
				<Route path="empresa/questionario" component={QuestionariosEmpresa} />
				<Route path="empresa/questionario/novo" component={NovoQuestionario} />
				<Route path="empresa/nova" component={NovaEmpresa} />
						<Route path="empresa/questionario/NovaPergunta" component={NovaPergunta} />
						<Route path="relatorio" component={Relatorio} />
			</Route>
		</Router>
	),
	document.getElementById('root')
);
