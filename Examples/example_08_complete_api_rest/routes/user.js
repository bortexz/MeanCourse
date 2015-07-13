/**
 * What you see here is called a IIF (Immediately-invoked function). This is not always used or required, but
 * in this case it could be a good option. In this router, we need a function to act as a middleware, so we declare the
 * function in middle of all other things. If you encapsulate all the code inside an IIF, then que global javascript
 * scope is not altered.
 *
 * There's people that always uses this approach, and people that never use it. Do whatever you like more.
 */

(function(){
  var userRouter = require('express').Router();
  var express_jwt = require('express-jwt');
  var taskRouter = require('./task');
  var ObjectId = require('mongoose').Types.ObjectId;
  var bcrypt = require('bcrypt');
  var userModel = require('mongoose').model('User');
  var config = require('../config');
  var _ = require('lodash');
  /**
   * Function that will check if the user logged is the same user as the parameter :id of the url.
   */
  function userCheck(req, res, next) {
    if(new ObjectId(req.params.user_id).equals(req.user._id)){
      next();
    }else {
      res.status(401).send('You trying to access others data');
    }
  }

  /**
   * Function to change the password of the user.
   */
  userRouter.patch('/:user_id', express_jwt({secret: config.jwt_secret}), userCheck, function(req, res, next) {
    var oldPass = req.body.oldPassword;
    var newPass = req.body.newPassword;
    bcrypt.compare(oldPass, req.user.password, function(err, result){
      if(result) {
        bcrypt.hash(newPass, 12, function(err, hash) {
          userModel.findOne({_id: new ObjectId(req.user._id)}, function(err, user){
            if(err) throw err;
            else if(!user) res.status(404).send("Couldn't find the user");
            else {
              user.password = hash;
              user.save(function(err, user){
                if(err) throw err;
                res.status(200).send('Password changed correctly');
              });
            }
          });
        });
      }else {
        res.status(401).send('Wrong password');
      }
    });
  });

  userRouter.get('/', express_jwt({secret: config.jwt_secret}), function(req, res, next) {
    if(req.user.is_admin) {
      userModel.find({}, function(err, users) {
        if(err) throw err;
        else {
          res.status(200).send(users);
        }
      })
    } else {
      userModel.findOne({_id: req.user._id}, function(err, user) {
        if(err) throw err;
        else {
          res.status(200).send(user);
        }
      })
    }
  });

  /**
   * Create new user.
   */
  userRouter.post('/', function(req, res, next) {
    //We use lodash to get the attributes that we wanted, and not let the user insert other data. (e.g. cannot let the
    //user send is_admin = true;
    var userData = _.pick(req.body, ['username', 'password']);
    //If parameters exists
    if(userData.username && userData.password) {
      //We search for a user with that username, if exists return error
      userModel.findOne({username: userData.username}, function(err, user) {
        if(err) throw err;
        else if(user) res.status(400).send("This username already exists");
        else {
          bcrypt.hash(userData.password, 12, function(err, hash) {
            if(err) throw err;
            else {
              //We put the hash on the password field.
              userData.password = hash;
              var userDb = new userModel(userData);
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

  userRouter.use('/:user_id/task', express_jwt({secret: config.jwt_secret}), userCheck, taskRouter);

  module.exports = userRouter;
})();