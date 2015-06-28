// Include http module.
var http = require("http");
var log = require('winston');
// Create the server. The function passed as a parameter is called in every request.
// request variable holds all request parameters
// response variable allow you to set the content to send to the client
http.createServer(function (request, response) {
    // Write headers to the response.
    // 200 is HTTP status code (this one means success)
    // Second parameter holds header fields in object
    // We are sending plain text, so Content-Type should be text/plain

    log.info('Before writing headers');
    response.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    // Send data and end response.
    response.end('Hello HTTP!');
    log.info('response sended');

// Listen on the 8080 port.
}).listen(8080);