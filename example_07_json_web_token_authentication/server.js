var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var mongoose = require('mongoose');
var models = require('./models');
var express_jwt = require('express-jwt');
var config = require('./config');
//Mongoose connect to database.
mongoose.connect(config.db_path);

//Initialize models
models.initialize();

var app = express();

app.use(bodyParser.json());

//Import the router of users
var userRouter = require('./routes/users');
var authRouter = require('./routes/authentication');

app.use('/users',  userRouter);
app.use('/authenticate', authRouter);

http.createServer(app).listen(8080);