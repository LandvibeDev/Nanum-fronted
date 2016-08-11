'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = study;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by jgb on 2016-07-28.
 */
function study(data) {
    var router = _express2.default.Router();

    router.post('/', function (req, res) {

        return res.json({ title: "post title", topic: "post content", id: "post member" });
    });

    router.get('/', function (req, res) {

        return res.json({ title: data.title, topic: data.topic, member: data.id });
    });

    return router;
}

//# sourceMappingURL=study-compiled.js.map