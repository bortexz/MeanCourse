var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Function to define the model of an user.
 * Some redundant info has been added.
 */
module.exports = function() {
  var userSchema = new Schema({
    username: {type: String, required:true},
    password: {type: String, required: true},
    is_admin: {type: Boolean}
  });

  mongoose.model('User', userSchema, 'users');
};

