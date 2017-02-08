var express = require('express')
var app = express()
var proxy = require('express-http-proxy')
var http = require('http')
var publicPath = './build/'
var request = require('request')
app.use(express.static(publicPath))
app.use('/proxyimg', proxy('pic1.zhimg.com', {
  decorateRequest: function(proxyReq, originalReq) {
    
    proxyReq.url = originalReq.url.replace('/proxyimg/', '/')
    proxyReq.headers['Host'] = 'pic1.zhimg.com'
    delete proxyReq.headers.referer
    return proxyReq
  }
}))
app.use('/zapi', function(req, res){
  var url = 'http://news-at.zhihu.com' + req.url
  request(
    {
      url: url,
      json: true
    }, (err, response, data) => {
    if (!err && response.statusCode === 200) {
      res.send(data)
    } else {
      res.send(JSON.stringify(response))
    }
  })
})

app.listen(8080,function(e){
  if(e) throw e
  console.log('run at 8080')
})