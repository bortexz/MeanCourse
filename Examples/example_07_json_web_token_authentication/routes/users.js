var User = require('mongoose').model('User');
var userRouter = require('express').Router();
var ObjectID = require('mongoose').Types.ObjectId;
var jwt_secret = require('../config').jwt_secret;
var express_jwt = require('express-jwt');
/**
 * Function to retrieve all the users in the database.
 * Restricted only to admin users.
 */
userRouter.get('/', express_jwt({secret: jwt_secret}), function(req, res, next) {
  if(req.user.is_admin) {
    User.find({}, function(err, users) {
      if(err) throw err;
      else {
        res.status(200).send(users);
      }
    })
  } else{
    res.status(403).send('You don\'t have access to this resource');
  }
});

/**
 * Function to create new user (register)
 */
userRouter.post('/', function(req, res, next) {
  var userDb = new User(req.body);
  userDb.save(function(err, newUsr) {
    if(err) throw err;
    else {
      res.status(200).json({user: newUsr});
    }
  });
});

/**
 * Function to delete the user with id :id.
 * Only the same user that is doing the petition can delete itself!
 */
userRouter.delete('/:id', express_jwt({secret: jwt_secret}),function(req, res, next) {
  if(req.user._id.toString() === req.params.id) {
    User.findOne({_id: new ObjectID(req.params.id)}, function(err, user) {
      if(err) throw err;
      else {
        if(user) {
          user.remove();
          res.status(204).end();
        } else {
          res.status(404).end();
        }
      }
    })
  } else {
    res.status(401).send('You cannot delete other users data');
  }
});

/**
 * Function to update the user with id :id.
 * Only the user doing the petition can patch itself.
 */
userRouter.patch('/:id', express_jwt({secret: jwt_secret}), function(req, res, next) {
  User.findOne({_id: new ObjectID(req.params.id)}, function(err, user) {
    if(err) throw err;
    else if(!user) res.status(404).end();
    else {
      user.username = req.body.username || user.username;
      user.password = req.body.password || user.password;
      user.save(function(err, newUsr){
        if(err) throw err;
        res.status(200).json({user: newUsr});
      });
    }
  });
});

module.exports = userRouter;