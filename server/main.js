import express from 'express';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import path from 'path';

const app = express();
const port = 3000;
const devPort = 3001;


// 개발 모드일 때 proxy로 3001포트에 서버를 연다
if(process.env.NODE_ENV == 'development'){
  console.log('Server is running on development mode');

  const config = require('../webpack.dev.config');
  let compiler = webpack(config);
  let devServer = new WebpackDevServer(compiler, config.devServer);
  devServer.listen(devPort, ()=> {
    console.log('webpack-dev-server is listening on port', devPort);
  })

}


app.use('/images', express.static(__dirname + '/../images')); // 사진 파일 경로 path=/images/name.jpg로 접근
app.use(express.static(__dirname + '/../node_modules')); // npm packages에 직접 접근 하는 경로
app.use('/', express.static(__dirname + '/../public')); // public/index.html이 시작점

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '../public', 'index.html'))
})

import counter from './routes/counter';
let data = {number: 0};
app.use('/counter', counter(data));

// app.get('/hello', (req, res) => {
//     return res.send('Can you hear me?');
// });
//
// import posts from './routes/posts';
// app.use('/posts', posts);

const server = app.listen(port, ()=> {
  console.log('Express listening on port', port);
});
