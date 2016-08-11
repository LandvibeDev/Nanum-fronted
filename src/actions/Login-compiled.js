"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LOGIN = exports.LOGIN_FAILURE = exports.LOGIN_SUCCESS = undefined;
exports.loginRequest = loginRequest;
exports.login = login;
exports.loginSuccess = loginSuccess;
exports.loginFailure = loginFailure;

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by jgb on 2016-08-09.
 */
var LOGIN_SUCCESS = exports.LOGIN_SUCCESS = "LOGIN_SUCCES";
var LOGIN_FAILURE = exports.LOGIN_FAILURE = "LOGIN_FAILURE";
var LOGIN = exports.LOGIN = "LOGIN";
function loginRequest(id, password) {
    return function (dispatch) {
        // Inform Login API is starting
        dispatch(login());

        // API REQUEST
        return _axios2.default.post('/ajax-login', { id: id, password: password }).then(function (response) {
            // SUCCEED
            if (response.data.success) dispatch(loginSuccess(id));else dispatch(loginFailure());
        });
    };
}

function login() {
    return {
        type: LOGIN
    };
}

function loginSuccess(id) {
    return {
        type: LOGIN_SUCCESS,
        id: id
    };
}

function loginFailure() {
    return {
        type: LOGIN_FAILURE
    };
}

//# sourceMappingURL=Login-compiled.js.map