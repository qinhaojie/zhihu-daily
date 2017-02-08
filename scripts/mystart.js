'use strict'
process.env.NODE_ENV = 'development'
let webpack = require('webpack');
let webpackMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');

let express = require('express');
let path = require('path');
let http = require('http');
let bodyParser = require('body-parser');
var webpackConfig = require('../config/webpack.config.dev');
var proxy = require('express-http-proxy');

const isProduction = process.env.NODE_ENV === 'production';
const isDeveloping = !isProduction;

const app = express();


// Webpack dev server
if (isDeveloping) {
  const compiler = webpack(webpackConfig);
  app.use(webpackMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
      hash: false,
      timings: false,
      hot: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }));

  app.use(webpackHotMiddleware(compiler, {
    reload: true
  }));
}


const publicPath = path.resolve(__dirname, '../public/');
app.use(bodyParser.json({ type: 'application/json' }))
app.use(express.static(publicPath));

// 图片代理
app.use('/proxyimg', proxy('pic1.zhimg.com', {
  decorateRequest: function(proxyReq, originalReq) {
    
    proxyReq.url = originalReq.url.replace('/proxyimg/', '/')
    proxyReq.headers['Host'] = 'pic1.zhimg.com'
    delete proxyReq.headers.referer
    return proxyReq
  }
}))

app.use('/zapi', proxy('news-at.zhihu.com', {
  // decorateRequest: function(proxyReq, originalReq) {
  //   delete proxyReq.headers.referer
  //   console.log(originalReq)
  //   // proxyReq.url = originalReq.originalUrl
  //   console.log(proxyReq.url)
  //   return proxyReq
  // }
}))

const port = isProduction ? (process.env.PORT || 80) : 4000;

app.get('*', function (request, response){
  let pathFields = request.originalUrl.split('/')

  switch(pathFields[1]) {
  case 'test':
      response.sendFile(path.resolve(__dirname, '', 'test.html'))
      break
  default:
    response.sendFile(path.resolve(__dirname, '', 'index.html'))
  }
})

// We need to use basic HTTP service to proxy
// websocket requests from webpack
const server = http.createServer(app);

server.listen(port, function (err, result) {
  if(err){
    console.log(err);
  }
  console.log('Server running on port ' + port);
}); 
