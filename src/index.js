import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';

import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import counterApp from './reducers';
import Study from './components/Study/Study'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import {syncHistoryWithStore,routerReducer} from 'react-router-redux'
import thunk from 'redux-thunk';

const store = createStore(counterApp,applyMiddleware(thunk));

const history = syncHistoryWithStore(browserHistory,store)

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store = {store}>
        <Router history = {history}>
            <Route path = "/" component = {App}>
                <Route path = "studys" component = {Study} />
            </Route>
        </Router>
    </Provider>,
    rootElement
);
