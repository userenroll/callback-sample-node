var http = require('http')
  , SNSClient = require('aws-snsclient');

var client = SNSClient(function(err, message) {
  var data = JSON.parse(message.Message)

  // Do something witih the data here
  console.log(data)
});

http.createServer(function(req, res) {
  if(req.method === 'POST' && req.url === '/receive') {
    return client(req, res);
  }
  res.writeHead(404);
  res.end('Not found.');
}).listen(8080);