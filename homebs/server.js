var http = require('http');
var fs = require('fs');

//404 response
function send404Response(response){
	response.writeHead(404, {"Content-Type": "text/plain"});
	response.write("Error 404: Page not found!");
	response.end();
}

//Handle user request to server

function onRequest(request, response){

	if(request.method == 'GET' && request.url == '/'){
		response.writeHead(200, {"Content-Type": "text/html"});
		fs.createReadStream("./home.html").pipe(response);

	}else{
		 send404Response(response);
	}
	// console.log("A user made a request " + request.url);
	// response.writeHead(200,{"Context-Type": "text/plain"});
	// response.write("Here is your data");
	// response.end();
}


http.createServer(onRequest).listen(8888);

// var proxy = http.createServer( (req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('okay');
// });
console.log("Server is now running..");