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
        return axios.post('/ajax-login', { id, password })
            .then((response) => {
                // SUCCEED
                if(response.data.success)
                    dispatch(loginSuccess(id));
                else
                    dispatch(loginFailure());
            });
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