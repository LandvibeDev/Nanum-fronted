/**
 * Created by jgb on 2016-08-09.
 */
export const LOGIN_SUCCESS = "LOGIN_SUCCES";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGIN = "LOGIN";
import axios from 'axios';

export function loginRequest(id, password) {
    return (dispatch) => {
        // Inform Login API is starting
        dispatch(login());

        // API REQUEST
        return axios({
            method: 'post',
            url: 'http://landvibe.com:8000/accounts/login',
            withCredentials: true,
            data: {
                Username:id,
                Password:password,
                csrfmiddlewaretoken:'usyoxuju06kl9nw9gmpdva8n0lwwymww'
            }
        }).then((response) => {
                // SUCCEED
                console.log(response);
                dispatch(loginSuccess(id));

            })
            .catch((error)=>{
                console.log(error);
            })
    };
}

export function login() {
    return {
        type: LOGIN
    };
}

export function loginSuccess(id) {
    return {
        type: LOGIN_SUCCESS,
        id
    };
}

export function loginFailure() {
    return {
        type: LOGIN_FAILURE
    };
}