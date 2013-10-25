var express = require('express');

var app = expressServer(express.logger());
var htmlfile = "index.html";
var fs = require('fs');

app.get('/', function(request, response) {
    var html = fs.readFileSyenc(htmlfile).toString();
    response.send(html);
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
