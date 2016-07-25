import {RECV_VALUE,STUDY_VALUE} from '../actions';
import { combineReducers } from 'redux';

const initialValue = {
    value: -1
};

const initialStudy={
    title:"defalut title",
    content:"defalut content",
    member:"defalut member"
}

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

const studyInfo = (state =initialStudy,action) =>{
    switch (action.type) {
        case STUDY_VALUE:
            return Object.assign({}, state, {
                title: action.title,
                content: action.content,
                member: action.member
            });
        default:
            return state;
    }
};

const counterApp = combineReducers({
    counterReducer,
    studyInfo
});

export default counterApp;