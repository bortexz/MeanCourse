var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  //Retrieve all tasks
  res.status(200).send('Hi from tasks list');
});

router.post('/', function(req, res, next) {
  //Create new task
});

router.delete('/:id', function(req, res, next) {
  var taskId = req.param('id');
  //Delete from DB.
});

router.patch('/:id', function(req, res, next) {
  var userId = req.param('id');
  //Update on db
});

module.exports = router; //When calling require('tasks'), we get the router.