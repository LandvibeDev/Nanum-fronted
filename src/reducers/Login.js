/**
 * Created by jgb on 2016-08-09.
 */
import * as types from '../actions/ActionTypes';
import {List, Map,fromJS,} from 'immutable';


export default function Login(state, action) {
    if(typeof state === "undefined"){
        state = Map(
            {
                login:Map({
                    status:'INIT'
                }),
                status:Map({
                    isLoggedIn:false,
                    token:'',
                    currentUser:''
        })});
    }

    switch(action.type) {
        /* LOGIN */
        case types.LOGIN:
            return state.setIn(['login','status'],'WAITING');
        case types.LOGIN_SUCCESS:
            return state.setIn(['login','status'],'SUCCESS').setIn(['status','isLoggedIn'],true).setIn(['status','token'],action.token);
        case types.LOGIN_FAILURE:
            return state.setIn(['login','status'],'FAILURE');
        case types.LOGIN_INFO:
            return state.setIn(['status','currentUser'],action.username);
        case types.LOGOUT:
            return state.setIn(['status','currentUser'],'').setIn(['status','token'],'').setIn(['status','isLoggedIn'],false);
        case types.GET_STATUS:
            return state.setIn(['status','currentUser'],action.username).setIn(['status','token'],action.token).setIn(['status','isLoggedIn'],true)
        default:
            return state;
    }
}