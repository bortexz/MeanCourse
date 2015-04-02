var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

var app = express();

app.use(bodyParser.json());

//Import the router of users
var usersRouter = require('./routes/users');

//Use this router for /users/ endpoint.
app.use('/users', usersRouter);


http.createServer(app).listen(8080);