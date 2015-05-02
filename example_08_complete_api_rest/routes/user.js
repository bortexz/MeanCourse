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
  var tasksRouter = require('./tasks');
  var taskRouter = require('./task');
  var ObjectId = require('mongoose').Types.ObjectId;
  var bcrypt = require('bcrypt');
  var userModel = require('mongoose').model('User');

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
  userRouter.patch('/:user_id', userCheck, function(req, res, next) {
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

  userRouter.use('/:user_id/tasks', userCheck, tasksRouter);
  userRouter.use('/:user_id/task', userCheck, taskRouter);

  module.exports = userRouter;
})();