var authRouter = require('express').Router();
var userModel = require('mongoose').model('User');
var bcrypt = require('bcrypt');
var jsonwebtoken = require('jsonwebtoken');
var config = require('../config');

authRouter.post('/', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  //Note the use of lean() here. With that, the object returned is plain javascript and not a mongoose document.
  //The find().exec() is the same as passing the function as a second parameter to the query.
  userModel.findOne({username: username}).lean().exec(function(err, user){
    if(err) throw err;
    else if(!user) res.status(404).send("Cannot find user with that username");
    else {
      bcrypt.compare(password, user.password, function(err, result) {
        if(err) throw err;
        else if(!result) res.status(401).send("Password incorrect");
        else {
          //Imagine the tasks array grows too much. We don't need that on the token.
          var signed = {
            _id: user._id.toString(),
            username: user.username,
            password: user.password,
            is_admin: user.is_admin
          };

          var token = jsonwebtoken.sign(signed, config.jwt_secret);
          delete user.password;
          res.status(200).json({
            user: user,
            token: token
          });
        }
      });
    }
  });
});

module.exports = authRouter;