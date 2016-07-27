import {RECV_VALUE,STUDY_VALUE} from '../actions';
import { combineReducers } from 'redux';
import {List, Map} from 'immutable';
import {syncHistoryWithStore,routerReducer} from 'react-router-redux'

const initialValue = {
    value: -1
};

const initialStudy=Map({
    title:"defalut title",
    content:"defalut content",
    member:"defalut member"
});

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
        case STUDY_VALUE:
            return state.merge({
              'title':action.title,
              'content':action.content,
              'member':action.member
            })
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
