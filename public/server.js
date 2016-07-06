var http = require('http');

function onRequest(request, response){
	console.log("A user made a request " + request.url);
	response.writeHead(200,{"Context-Type": "text/plain"});
	response.write("Here is your data");
	response.end();
}


http.createServer(onRequest).listen(8888);

// var proxy = http.createServer( (req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('okay');
// });
console.log("Server is now running..");