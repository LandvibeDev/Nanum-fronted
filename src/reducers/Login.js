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
                    sessionid:'',
                    currentUser:''
                }),
                data:Map({
                    firstName:'',
                    lastName:'',
                    birthDay:'',
                    email:'',
                    studyList:[]
                }),
                signUp:Map({
                    status:'INIT',
                    error:-1,
                    clicked:false,

                })});
    }

    switch(action.type) {
        /* LOGIN */
        case types.LOGIN:
            return state
                .setIn(['login','status'],'WAITING');
        case types.LOGIN_SUCCESS:
            return state
                .setIn(['login','status'],'SUCCESS')
                .setIn(['status','isLoggedIn'],true)
                .setIn(['status','token'],action.token)
                .setIn(['status','sessionid'],action.sessionid);
        case types.LOGIN_FAILURE:
            return state
                .setIn(['login','status'],'FAILURE');
        case types.LOGIN_INFO:
            return state
                .setIn(['data','firstName'],action.data.user_info.user.first_name)
                .setIn(['data','lastName'],action.data.user_info.user.last_name)
                .setIn(['data','email'],action.data.user_info.user.email)
                .setIn(['data','birthDay'],action.data.user_info.birthday)
                .setIn(['data','studyList'],action.data.study_info);
        case types.LOGOUT:
            return state
                .setIn(['status','currentUser'],'')
                .setIn(['status','token'],'')
                .setIn(['status','isLoggedIn'],false);
        case types.GET_STATUS:
            return state
                .setIn(['status','currentUser'],action.username)
                .setIn(['status','token'],action.token)
                .setIn(['status','isLoggedIn'],true);
        case types.SIGNUP_CLICKED:
            return state
                .setIn(['signUp','clicked'],true);
        case types.SIGNUP:
            return state
                .setIn(['signUp','status'],'WAITING')
                .setIn(['signUp','error'],-1);
        case types.SIGNUP_SUCCESS:
            return state
                .setIn(['signUp','status'],'SUCCESS');
        case types.SIGNUP_FAILURE:
            return state
                .setIn(['signUp','status'],'FAILURE');
        default:
            return state;
    }
}