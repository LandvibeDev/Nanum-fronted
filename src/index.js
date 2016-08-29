import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import {syncHistoryWithStore,routerReducer} from 'react-router-redux'
import thunk from 'redux-thunk';

import counterApp from './reducers';
import { App, Home, Study, } from './containers';


const store = createStore(counterApp,applyMiddleware(thunk));

const history = syncHistoryWithStore(browserHistory,store);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store = {store}>
        <Router history = {history}>
            <Route path = "/" component = {App}>
                <IndexRoute component = {Home} />
                <Route path = "studys" component = {Study} />
            </Route>
        </Router>
    </Provider>,
    rootElement
);
