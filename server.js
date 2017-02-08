var express = require('express')
var app = express()
var proxy = require('express-http-proxy')

var publicPath = './build/'
app.use(express.static(publicPath))
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
app.listen(8080,function(e){
  if(e) throw e
  console.log('run at 8080')
})