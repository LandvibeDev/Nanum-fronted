/**
 * Created by jgb on 2016-08-09.
 */
import axios from 'axios';
import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGIN,
    LOGIN_INFO,
    LOGOUT,
    GET_STATUS,
    SIGNUP,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    SIGNUP_CLIKED
} from './ActionTypes';

export function signUpRequest(id,password,firstname,lastname,email,birthday){
    return (dispatch) => {
        // Inform Login API is starting
        dispatch(signUp());

        // API REQUEST
        return axios({
            method: 'post',
            url: 'http://landvibe.com:8000/accounts/join/',
            data: {
                username:id,
                password:password,
                first_name:firstname,
                last_name:lastname,
                email:email,
                birthday:birthday
            }
        }).then((response) => {
            // SUCCEED
            dispatch(signUpSuccess());

        }).catch((error)=>{
            console.log(error);
            dispatch(signUpFailure())
        })
    };
}

export function loginRequest(id, password) {
    return (dispatch) => {
        // Inform Login API is starting
        dispatch(login());

        // API REQUEST
        return axios({
            method: 'post',
            url: 'http://landvibe.com:8000/obtain-auth-token/',
            data: {
                username:id,
                password:password,
            }
        }).then((response) => {
                // SUCCEED
                console.log(response);
                dispatch(loginSuccess(response.data.token));

            })
            .catch((error)=>{
                console.log(error);
                dispatch(loginFailure());
            })
    };
}

export function userInfo(token) {
    return (dispatch) => {

        // API REQUEST
        return axios({
            method: 'get',
            url: 'http://landvibe.com:8000/users/i/',
            headers: {
                'Authorization': 'Token ' + token
            },

        }).then((response) => {
            // SUCCEED
            console.log(response.data);
            dispatch(info(response.data));

        }).catch((error)=>{
            console.log(error);
            dispatch(loginFailure());
        })
    };
}

export function getStatusRequest(token,username) {
    return (dispatch) => {
        // inform Get Status API is starting
        dispatch(getStatus(token,username));
        dispatch(userInfo(token));

        /*return axios.get('/api/account/getInfo')
            .then((response) => {
                dispatch(getStatusSuccess(response.data.info.username));
            }).catch((error) => {
                dispatch(getStatusFailure());
            });*/
    };
}

export function getStatus(token,username) {
    return {
        type: GET_STATUS,
        token:token,
        username:username
    };
}

export function logoutRequest() {
    return {
        type:LOGOUT
    }
}

export function signUp(){
    return{
        type:SIGNUP
    }
}

export function signUpSuccess(){
    return{
        type:SIGNUP_SUCCESS
    }
}

export function signUpFailure(){
    return{
        type:SIGNUP_FAILURE
    }
}

export function signUpClicked() {
    return {
        type:SIGNUP_CLIKED
    }
}

export function info(data) {
    return {
        type: LOGIN_INFO,
        data:data
    };
}

export function login() {
    return {
        type: LOGIN
    };
}

export function loginSuccess(token) {
    return {
        type: LOGIN_SUCCESS,
        token:token
    };
}

export function loginFailure() {
    return {
        type: LOGIN_FAILURE
    };
}