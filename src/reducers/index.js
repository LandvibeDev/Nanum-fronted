import {RECV_VALUE,GET_STUDY,POST_STUDY} from '../actions';
import { combineReducers } from 'redux';
import {List, Map} from 'immutable';
import {syncHistoryWithStore,routerReducer} from 'react-router-redux'
import update from 'react-addons-update'

const initialValue = {
    value: -1
};

const initialStudy={data:[]};

const counterReducer = (state = initialValue, action) => {
    switch (action.type) {
        case RECV_VALUE:
            return Object.assign({}, state, {
                value: action.value
            });
        default:
            return state;
    }
};

const studyInfo = (state = initialStudy, action) =>{
    switch (action.type) {
        case GET_STUDY:
            return update(state, {
                data: { $set: action.data }
            });
        case POST_STUDY:
            return update(state, {
                data: { $push: action.data }
            });

            //return state.set('title', action.title).set('content', action.content).set('memeber',action.memeber)
        default:
            return state;
    }
};

const counterApp = combineReducers({
    counterReducer,
    studyInfo,
    routing:routerReducer
});

export default counterApp;
