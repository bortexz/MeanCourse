//Require models. By default, if the parameter is a folder, it will take index.js inside this folder.
var models = require('./models');
var mongoose = require('mongoose');
var log = require('winston');

//Mongoose connect to database.
mongoose.connect('mongodb://localhost/example_03');

//Initialize models defined.
models.initialize();

//Some callbacks for feedback on console about mongoDB connection. In this script, we also make our work inside the
//open callback, to ensure we are connected to database when we make requests to database.
var db = mongoose.connection;
db.on('error', function(err) {
  log.error(err);
});
db.once('open', function () {
  log.info('Openned MongoDB Connection');

  //Get the models;
  var User = mongoose.model('User');
  var Task = mongoose.model('Task');

  //Do some operations on the model.
  //First of all, we delete all of the items, to execute the script several times.

  //Note that the first parameter of the callback is ALWAYS an err object that is null if all went ok. Other
  //parameters may be present depending on the operation.

  //Also, all the operations to the database are asynchronous.
  User.remove(function(err) {
    if(!err) {
      Task.remove(function(err) {
        if(!err) {
          //Here we create an object with the data of a new user.
          var new_user_data = {
            username: 'bertofer',
            password: '1234',
            tasks:[]
          };
          //Pass the data to a constructor of the model User.
          var new_user = new User(new_user_data);

          //And then save it on the database.
          new_user.save(function(err){
            if(!err) {
              //The user has been saved correctly
              //Now, find it to print to the logger
              User.find({},function(err, docs) {
                if(!err) {
                  log.info(docs.toString());

                  //Now let's update the password.
                  new_user.password = '54321';
                  new_user.save(function(err){
                    if(!err) {
                      //The user has been saved correctly
                      //Now, find it to print to the logger
                      User.find({},function(err, docs) {
                        if (!err) {
                          log.info(docs.toString());
                        }
                      });
                    }
                  });
                }
              });
            }
          })
        }
      })
    }
  });

});