var connect = require('connect');
var http = require('http');
var nodemon = require('nodemon');

var app = connect();

function doFirst(request, response, next){
	console.log("Lukman is on");
}

function forum(request, response){
	console.log('user requested forum');
}

app.use(forum);
app.use(doFirst);

http.createServer(app).listen(8800);
console.log("Our server is now running");

