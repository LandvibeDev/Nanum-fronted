import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterApp from './reducers';
import SignUp from './components/Main/SignUp'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import {syncHistoryWithStore,routerReducer} from 'react-router-redux'

const store = createStore(counterApp);

const history = syncHistoryWithStore(browserHistory,store)

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store = {store}>
        <Router history = {history}>
            <Route path = "/" component = {App}>
                <Route path = "SignUp" component = {SignUp} />
            </Route>
        </Router>
    </Provider>,
    rootElement
);

