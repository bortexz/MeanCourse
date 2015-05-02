var usersModel = require('mongoose').model('User');
var usersRouter = require('express').Router();
var express_jwt = require('express-jwt');
var config = require('../config');
var _ = require('lodash');
var bcrypt = require('bcrypt');

/**
 * Function to retrieve all the users with his information (including password-encrypted), only accessible by admins.
 * This function also requires authentication.
 */
usersRouter.get('/', express_jwt({secret: config.jwt_secret}), function(req, res, next) {
  if(req.user.is_admin) {
    usersModel.find({}, function(err, users) {
      if(err) throw err;
      else {
        res.status(200).send(users);
      }
    })
  } else {
    res.status(401).send('You dont have access to this resource');
  }
});

/**
 * Create new user.
 */
usersRouter.post('/', function(req, res, next) {
  //We use lodash to get the attributes that we wanted, and not let the user insert other data. (e.g. cannot let the
  //user send is_admin = true;
  var userData = _.pick(req.body, ['username', 'password']);
  //If parameters exists
  if(userData.username && userData.password) {
    //We search for a user with that username, if exists return error
    usersModel.findOne({username: userData.username}, function(err, user) {
      if(err) throw err;
      else if(user) res.status(400).send("This username already exists");
      else {
        bcrypt.hash(userData.password, 12, function(err, hash) {
          if(err) throw err;
          else {
            //We put the hash on the password field.
            userData.password = hash;
            var userDb = new usersModel(userData);
            userDb.save(function(err, user) {
              if(err) throw err;
              else {
                //To object before sending it
                user = user.toObject();
                //Not sending the password back
                delete user.password;
                res.status(200).json(user);
              }
            });
          }
        });
      }
    });
  } else {
    res.status(400).send('The parameters are not correct');
  }
});

module.exports = usersRouter;