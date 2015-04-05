var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  //Retrieve all users
  res.status(200).send('Hi from users list');
});

router.get('/:id', function(req, res, next){
  var userId = req.param('id');
  //Get info about the user userId
});

router.post('/', function(req, res, next) {
  //Create new user
});

router.delete('/:id', function(req, res, next) {
  var userId = req.param('id');
  //Delete user from db
});

router.patch('/:id', function(req, res, next) {
  var userId = req.param('id');
  //Update on db
});

module.exports = router; //When calling require('users'), we get the router.