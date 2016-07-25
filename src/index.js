import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterApp from './reducers';


const store = createStore(counterApp);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    rootElement
);
