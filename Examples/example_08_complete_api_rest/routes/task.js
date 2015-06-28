var taskRouter = require('express').Router();
var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
var taskModel = mongoose.model('Task');
var userModel = mongoose.model('User');
var _ = require('lodash');


taskRouter.get('/', function(req, res, next) {
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

taskRouter.post('/', function(req, res, next) {
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


taskRouter.patch('/:task_id', function(req, res, next) {
  var task_id = req.params.task_id;
  taskModel.findOne({_id: new ObjectId(task_id)}, function(err, task) {
    if(err) throw err;
    else if(!task) res.status(404).send("Not found");
    else {
      _.assign(task, {
        description: req.body.description || task.description,
        title: req.body.title || task.title,
        completed: req.body.completed || task.completed,
        dueDate: req.body.dueDate || task.dueDate,
        subtasks: req.body.subtasks || task.subtasks
      });
      task.save(function(err, task) {
        if(err) throw err;
        else {
          res.status(200).send(task.toObject());
        }
      });
    }
  })
});

taskRouter.delete('/:task_id', function(req, res, next){
  var task_id = req.params.task_id;
  //Find the task
  taskModel.findOne({_id: new ObjectId(task_id)}, function(err, task) {
    if(err) throw err;
    else if(!task) res.status(404).send("Not found");
    else {
      //Find the user of the task
      userModel.findOne({_id: new ObjectId(req.user._id)}, function(err, user) {
        if(err) throw err;
        else {
          //Remove the task from the users list
          _.pull(user.tasks, task._id);
          user.save(function(err, user) {
            if(err) throw err;
            //Finally, remove the task from database
            else task.remove(function(err){
              if(err) throw err;
              else {
                res.status(200).send("Deleted correctly");
              }
            });
          });
        }
      })
    }
  });
});

module.exports = taskRouter;