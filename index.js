var express = require("express");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) 
{
	console.log(request.method);
    console.log(request.headers);
    console.log(request.url);
    response.write('hi');
	response.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
