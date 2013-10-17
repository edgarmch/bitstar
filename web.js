var express = require('express');

var app = express(express.logger());

var fs = require('fs');

fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  var ar = data;
});


app.get('/', function(request, response) {
  response.send(a);
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
