"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.POST_STUDY = exports.GET_STUDY = undefined;
exports.GetStudy = GetStudy;
exports.PostStudy = PostStudy;
exports.postStudy = postStudy;
exports.getStudy = getStudy;

var _axios = require("axios");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GET_STUDY = exports.GET_STUDY = "GET_STUDY";
var POST_STUDY = exports.POST_STUDY = "POST_STUDY";
function GetStudy(data) {
    return {
        type: GET_STUDY,
        data: data
    };
};

function PostStudy(data) {
    return {
        type: POST_STUDY,
        data: data
    };
};

function postStudy() {
    // needs to dispatch, so it is first argument
    return function (dispatch) {
        return _axios2.default.post('/ajax-study').then(function (response) {
            return dispatch(PostStudy(response.data));
        });
    };
};

function getStudy() {
    // needs to dispatch, so it is first argument
    return function (dispatch) {
        return _axios2.default.get('http://landvibe.com:8000/study/').then(function (response) {
            return dispatch(GetStudy(response.data));
        });
    };
};

//# sourceMappingURL=index-compiled.js.map