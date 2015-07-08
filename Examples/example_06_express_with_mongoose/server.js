var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var mongoose = require('mongoose');
var models = require('./models');


//Mongoose connect to database.
mongoose.connect('mongodb://localhost/example_06');

//Initialize models defined.
models.initialize();

var app = express();

var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

//Import the router of users
var taskRouter = require('./routes/tasks');

//Use this router for /users/ endpoint.
app.use('/tasks', taskRouter);

http.createServer(app).listen(8080);