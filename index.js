var http = require("http");
var server = new http.Server(function(req, res)
{
	res.end(req.method, req.url);
});
server.listen(5000, "54.247.105.137");
