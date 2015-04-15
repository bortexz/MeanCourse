var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var mongoose = require('mongoose');
var models = require('./models');

//Mongoose connect to database.
mongoose.connect('mongodb://localhost/example_07');

//Initialize models
models.initialize();

var app = express();

app.use(bodyParser.json());

//Import the router of users
var userRouter = require('./routes/users');
var authRouter = require('./routes/authentication');

//Use this router for /users/ endpoint.
//app.use('/tasks', taskRouter);

http.createServer(app).listen(8080);