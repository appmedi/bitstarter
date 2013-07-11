var express = require('express');

var app = express.createServer(express.logger());
var index;

var fs = require('fs');
index = fs.readFileSync('/home/ubuntu/node-js-sample/index.html', 'utf8');

app.get('/', function(request, response) {
  response.send(index);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
