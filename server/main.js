import express from 'express';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import path from 'path';
import bodyParser from 'body-parser';
import session from 'express-session';

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


app.use(express.static(__dirname + '/../static'));
app.use('/images', express.static(__dirname + '/../images')); // 사진 파일 경로 path=/images/name.jpg로 접근
app.use(express.static(__dirname + '/../node_modules')); // npm packages에 직접 접근 하는 경로
app.use(express.static(__dirname + '/../public')); // public/index.html이 시작점
app.use(bodyParser.json());  //요청에서 JSON을 파싱할때 사용되는 미들웨어



import study from './routes/study';
import login from './routes/login';
let data = {title:"axios tilte",topic:"axios content",id:"Jeong"};

app.use('/ajax-study',study(data));
app.use('/ajax-login',login);


app.get('*', (req, res)=>{
  return res.sendFile(path.resolve(__dirname, '../public', 'index.html'))
});


const server = app.listen(port, ()=> {
  console.log('Express listening on port', port);
});
