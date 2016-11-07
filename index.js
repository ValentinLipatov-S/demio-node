var express = require("express");
var url = require("url");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) 
{
	var urlParsed = url.parse(request.url, true);
	response.send(urlParsed.query.message);
});
var port = process.env.PORT || 5000;
app.listen(port, function() {console.log("Listening on " + port);});
