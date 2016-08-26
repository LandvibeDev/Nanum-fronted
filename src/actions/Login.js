/**
 * Created by jgb on 2016-08-09.
 */
export const LOGIN_SUCCESS = "LOGIN_SUCCES";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGIN = "LOGIN";
export const LOGIN_INFO="LOGIN_INFO";
export const LOGOUT = "LOGOUT";
export const GET_STATUS ="GET_STATUS";
import axios from 'axios';

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
            url: 'http://landvibe.com:8000/accounts/login/',
            headers: {
                'Authorization': 'Token ' + token
            },

        }).then((response) => {
            // SUCCEED
            console.log(response);
            dispatch(info(response.data.username));

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

export function info(username) {
    return {
        type: LOGIN_INFO,
        username:username
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