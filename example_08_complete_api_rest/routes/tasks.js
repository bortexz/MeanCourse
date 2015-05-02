var tasksRouter = require('express').Router();
var mongoose = require('mongoose');
var userModel = mongoose.model('User');
var ObjectId = mongoose.Types.ObjectId;
var taskModel = mongoose.model('Task');

/**
 * Function to return all the tasks of a given user.
 */
tasksRouter.get('/', function(req, res, next) {
  userModel
    .findOne({_id: new ObjectId(req.user._id)})
    .populate('tasks')
    .exec(function(err, user) {
      if(err) throw err;
      else {
        res.status(200).json(user.tasks);
      }
    });
});

tasksRouter.post('/', function(req, res, next) {
  var taskData = req.body;
  var taskDb = new taskModel(taskData);
  taskDb.save(function(err, task){
    if(err) throw err;
    else {
      userModel.findOne({_id: new ObjectId(req.user._id)}, function(err, user){
        if(err) throw err;
        else if(!user) res.status(404).send("Couldn't find the user");
        else {
          user.tasks.push(task._id);
          user.save(function(err, user) {
            if(err) throw err;
            else res.status(200).json(task.toObject());
          });
        }
      })
    }
  });
});

module.exports = tasksRouter;