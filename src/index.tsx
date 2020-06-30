import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Switch, Route} from 'react-router-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import history from './history';

ReactDOM.render(
	<Router history={history}>
		<Switch>
			<Route path="/" component={App} />
		</Switch>
	</Router>
	,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
