import {GET_STUDY,POST_STUDY} from '../actions';
import { combineReducers } from 'redux';
import {List, Map,fromJS} from 'immutable';
import {syncHistoryWithStore,routerReducer} from 'react-router-redux'
import Login from './Login';
import Calendar from './Calendar'
import update from 'react-addons-update'

const initialValue = {
    value: -1
};

//const initialStudy={data:[]};
const initialStudy = List();


export default function studyInfo (state = initialStudy, action){
    switch (action.type) {
        case GET_STUDY:
            /*return update(state, {
                data: { $set: action.data }
            });*/
            return state.merge(action.data);
        case POST_STUDY:
            /*return update(state, {
                data: { $push: action.data }
            });*/
            return state.push(Map(action.data));

            //return state.set('title', action.title).set('content', action.content).set('memeber',action.memeber)
        default:
            return state;
    }
};

const counterApp = combineReducers({
    studyInfo,
    Login,
    Calendar,
    routing:routerReducer
});

export default counterApp;
