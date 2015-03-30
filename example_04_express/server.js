/**
 * Created by alberto on 24/3/15.
 */
var express = require('express');
var bodyParser = require('body-parser');
var winston = require('winston');
var expressWinston = require('express-winston');
var http = require('http');

var app = express();

//This middleware allow us to treat the body of the request as a json object.
app.use(bodyParser.json());

//Middleware for log every request to the system.
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

app.use(function(req,res,next) {
  winston.info('Our custom middleware!');
  next();
});

//This is the final function to request the GET / function. That is, when we enter http://localhost:port/
app.get('/', function(req, res, next) {
  res.status(200).send('Hi from express!')
});

//Example of the route that would create a new user.
app.post('/users', function(req, res, next) {
  var userData = req.body;
  //Here, save it on database, as you have seen on other examples.
  res.status(200).send(userData);
});

http.createServer(app).listen(8080);