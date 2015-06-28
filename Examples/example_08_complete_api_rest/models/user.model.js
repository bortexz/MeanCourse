var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function() {
  var userSchema = new Schema({
    username: {type: String, required:true},
    password: {type: String, required: true},
    is_admin: {type: Boolean, required: true, default: false},
    tasks: [{
      type: Schema.Types.ObjectId, ref: 'Task'
    }]
  });

  mongoose.model('User', userSchema, 'users');
};