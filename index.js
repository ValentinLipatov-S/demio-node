var express = require("express");
var http = require("http");
var https = require("https");

var app = express();
app.use(express.logger());

app.get('/', function(request, response) 
{
	var urlParsed = url.parse(request.url, true);
	console.log(request.method);
	console.log(request.headers);
	console.log(request.url);
	response.write('hi');
	response.send('Hello World! ' + urlParsed);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
