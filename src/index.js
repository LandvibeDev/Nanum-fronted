import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import {syncHistoryWithStore,routerReducer} from 'react-router-redux'
import thunk from 'redux-thunk';

import counterApp from './reducers';
import { App, Home, Study, } from './containers';
import Verification from './components/Verification/VerificationList'
import Scheduler from './components/Scheduler/Scheduler'


const store = createStore(counterApp,applyMiddleware(thunk));

const history = syncHistoryWithStore(browserHistory,store);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store = {store}>
        <Router history = {history}>
            <Route path = "/" component = {App}>
                <IndexRoute component = {Home} />
                <Route path = "study" component = {Study} >
                    <Route path = "/:studyID" component = {Study} />
                </Route>
                <Route path = "verification" component = {Verification} />
                <Route path ="scheduler" component={Scheduler}/>
            </Route>
        </Router>
    </Provider>,
    rootElement
);
