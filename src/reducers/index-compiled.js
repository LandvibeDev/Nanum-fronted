'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = require('../actions');

var _redux = require('redux');

var _immutable = require('immutable');

var _reactRouterRedux = require('react-router-redux');

var _Login = require('./Login');

var _Login2 = _interopRequireDefault(_Login);

var _reactAddonsUpdate = require('react-addons-update');

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialValue = {
    value: -1
};

//const initialStudy={data:[]};
var initialStudy = (0, _immutable.List)();

var studyInfo = function studyInfo() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? initialStudy : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case _actions.GET_STUDY:
            /*return update(state, {
                data: { $set: action.data }
            });*/
            return state.merge(action.data);
        case _actions.POST_STUDY:
            /*return update(state, {
                data: { $push: action.data }
            });*/
            return state.push((0, _immutable.Map)(action.data));

        //return state.set('title', action.title).set('content', action.content).set('memeber',action.memeber)
        default:
            return state;
    }
};

var counterApp = (0, _redux.combineReducers)({
    studyInfo: studyInfo,
    Login: _Login2.default,
    routing: _reactRouterRedux.routerReducer
});

exports.default = counterApp;

//# sourceMappingURL=index-compiled.js.map