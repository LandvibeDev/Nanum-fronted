/**
 * Created by jgb on 2016-08-09.
 */
import * as types from '../actions/ActionTypes';
import {List, Map,fromJS} from 'immutable';


export default function Login(state, action) {
    if(typeof state === "undefined"){
        state = Map({login:{
            status:'INIT'
        },
        status:{
            isLoggedIn:false,
            currentUser:''
        }});
    }

    switch(action.type) {
        /* LOGIN */
        case types.LOGIN:
            return state.set('login.status','WAITING');
        case types.LOGIN_SUCCESS:
            return state.set('login.status','SUCCESS').set('status.isLoggedIn',true).set('status.currentUser',action.id);
        case types.LOGIN_FAILURE:
            return state.set('login.status','FAILURE');
        default:
            return state;
    }
}