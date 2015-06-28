var express = require('express');
var router = express.Router();
var Task = require('mongoose').model('Task');
var ObjectId = require('mongoose').Types.ObjectId;

router.get('/', function(req, res, next){
  Task.find({}, function(err, data) {
    if(!err) {
      res.status(200).json(data);
    }
  })
});

router.post('/', function(req, res, next) {
  var taskData = req.body;
  var new_task = new Task(taskData);
  new_task.save(function(err, saved) {
    if(!err) {
      res.status(200).json(saved);
    } else {
      console.log(err);
    }
  })
});

router.delete('/:id', function(req, res, next) {
  var taskId = req.params.id;
  Task.remove({_id: new ObjectId(taskId)}, function(err){
    if(!err) {
      res.status(200).end();
    }
  });

  //alternative:
  //Task.findOneAndRemove();
});

router.patch('/:id', function(req, res, next) {
  var userId = req.params.id;
  var userData = req.body;
  Task.update({_id: userId}, {$set: userData}, function(err) {
    if(!err) {
      res.status(200).end();
    }
  });

  //alternative:
  //Task.findOneAndUpdate();
});

module.exports = router; //When calling require('tasks'), we get the router.