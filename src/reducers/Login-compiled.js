'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Login;

var _ActionTypes = require('../actions/ActionTypes');

var types = _interopRequireWildcard(_ActionTypes);

var _immutable = require('immutable');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by jgb on 2016-08-09.
 */
function Login(state, action) {
    if (typeof state === "undefined") {
        state = (0, _immutable.Map)({ login: {
                status: 'INIT'
            },
            status: {
                isLoggedIn: false,
                currentUser: ''
            } });
    }

    switch (action.type) {
        /* LOGIN */
        case types.LOGIN:
            return state.set('login.status', 'WAITING');
        case types.LOGIN_SUCCESS:
            return state.set('login.status', 'SUCCESS').set('status.isLoggedIn', true).set('status.currentUser', action.id);
        case types.LOGIN_FAILURE:
            return state.set('login.status', 'FAILURE');
        default:
            return state;
    }
}

//# sourceMappingURL=Login-compiled.js.map