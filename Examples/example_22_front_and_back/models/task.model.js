var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function() {
  var taskSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String},
    completed: {type: Boolean, default:false},
    dueDate: {type: Date},
    created: {type: Date, default: Date.now},
    subtasks: [{text: String, completed: Boolean}]
  });

  mongoose.model('Task', taskSchema, 'tasks');
};

