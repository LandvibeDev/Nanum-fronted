'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = login;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function login() {
    var router = _express2.default.Router();

    router.post('/', function (req, res) {
        console.log(req.body);
        if (req.body.id == "admin" && req.body.password == "1234") {
            var session = req.session;
            session.loginInfo = {
                id: req.body.id
            };

            // RETURN SUCCESS
            return res.json({ success: true });
        } else {
            return res.json({ success: false });
        }
    });

    router.get('/getinfo', function (req, res) {
        if (typeof req.session.loginInfo === "undefined") {
            return res.json({ success: false });
        }

        res.json({ info: req.session.loginInfo });
    });

    router.post('/logout', function (req, res) {
        req.session.destroy(function (err) {
            if (err) throw err;
        });
        return true;
    });

    return router;
} /**
   * Created by jgb on 2016-08-09.
   */

//# sourceMappingURL=login-compiled.js.map