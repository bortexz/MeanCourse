var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Function to define the model of an user.
 * The required field is used to ensure an object contains this before enter the database.
 * See how tasks is created. It only contains ObjectId's, but references 'Task'.
 */
module.exports = function() {
  var userSchema = new Schema({
    username: {type: String, required:true},
    password: {type: String, required: true},
    tasks: [{
      type: Schema.Types.ObjectId, ref: 'Task'
    }]
  });

  mongoose.model('User', userSchema, 'users');
};

