var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');

var app = express();

app.use(bodyParser.json());

//Import the router of users
var tasksRouter = require('./routes/tasks');

//Use this router for /users/ endpoint.
app.use('/tasks', tasksRouter);


http.createServer(app).listen(8080);