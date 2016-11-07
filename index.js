var express = require("express");
var url = require("url");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) 
{
	response.send(request.url + " " + request.method);
	
	var urlParsed = url.parse(request.url, true);
	console.log(urlParsed);
	
	if(urlParsed.pathname == '/echo' && urlParsed.query.message)
	{
		response.end(urlParsed.query.message);
	}
	else
	{
		response.statusCode = 404;
		response.end("Page not found");
	}
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
