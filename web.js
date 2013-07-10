var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var contents = fs.readfileSync('index.html');
  var buffer = new Buffer(contents, 'utf-8');
  response.send(buffer.toString('utf-8')); 
});
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
