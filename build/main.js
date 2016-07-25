'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _counter = require('./routes/counter');

var _counter2 = _interopRequireDefault(_counter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 3000;
var devPort = 3001;

// 개발 모드일 때 proxy로 3001포트에 서버를 연다
if (process.env.NODE_ENV == 'development') {
  console.log('Server is running on development mode');

  var config = require('../webpack.dev.config');
  var compiler = (0, _webpack2.default)(config);
  var devServer = new _webpackDevServer2.default(compiler, config.devServer);
  devServer.listen(devPort, function () {
    console.log('webpack-dev-server is listening on port', devPort);
  });
}

app.use('/images', _express2.default.static(__dirname + '/../images')); // 사진 파일 경로 path=/images/name.jpg로 접근
app.use(_express2.default.static(__dirname + '/../node_modules')); // npm packages에 직접 접근 하는 경로
app.use('/', _express2.default.static(__dirname + '/../public')); // public/index.html이 시작점

var data = { number: 0 };
app.use('/counter', (0, _counter2.default)(data));

// app.get('/hello', (req, res) => {
//     return res.send('Can you hear me?');
// });
//
// import posts from './routes/posts';
// app.use('/posts', posts);

var server = app.listen(port, function () {
  console.log('Express listening on port', port);
});