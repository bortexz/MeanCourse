var express = require('express');
var bodyParser = require('body-parser');
var winston = require('winston');
var expressWinston = require('express-winston');
var http = require('http');
var config = require('./config');
var express_jwt = require('express-jwt');

var app = express();
//mongoose
require('./models/index').initialize();
var mongoose = require('mongoose');
mongoose.connect(config.db_path);
//This middleware allow us to treat the body of the request as a json object.
app.use(bodyParser.json());

//Middleware for log every request to the system.
app.use(expressWinston.logger(config.winston_options));

//In this example, we have separated the collection users, from the individual user.
var usersRouter = require('./routes/users');
var userRouter = require('./routes/user');

app.use('/user' ,userRouter);

var authenticationRouter = require('./routes/authentication');
app.use('/authentication', authenticationRouter);

http.createServer(app).listen(8080, function(){
  console.log('Listening on port 8080');
});

