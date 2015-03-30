#Express

Express is a framework for writing API rest on Node.js

To open a express app, install express with npm and see this simple example.

	var express = require('express');
	var http = require('http');
	
	var app = express();

	http.createServer(app).listen(8080); 

##MiddleWare
Middleware are functions that are executed during a request to our API.

For what?:
    * Making logs of the requests.
    * Authentication
    * Parse headers and body.
    * Load objects from database.

Example:

	var bodyParser = require('body-parser');
	var winston = require('winston');
	var expressWinston = require('express-winston');
	
	//Middleware to parse body in the request to json
	app.use(bodyParser.json()); 		

	//Middleware for logging every request
	app.use(expressWinston.logger({
	  transports: [
	    new winston.transports.Console({
	      colorize: true
	    })
	  ],
	  meta: false,
	  msg: "HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms",
	  colorStatus: true 
	}));

	

##Routing
Routing refers to the definition of endpoints of our API and how it responds to client requests.

A route is a combination of URI, an HTTP request method and one or more handlers.

Example of function to execute when request with verb GET is made to root path ('/'). That is, when we open the browser and navigate to http://localhost:8080/

	app.get('/', function(req, res, next) {
	  res.status(200).send('Hi from express!')
	});

For example, if we want to create a new user (aka Register) we would make a route like this:
	
	app.post('/users', function(req, res, next) {
	  var userData = req.body;
	  //Here, save it on database, as you have seen on other examples.
	  ...
	  res.status(200).send(userData);
	});

For more info, look at these links:

http://expressjs.com/guide/using-middleware.html
http://expressjs.com/guide/routing.html	
https://github.com/bithavoc/express-winston
https://github.com/winstonjs/winston