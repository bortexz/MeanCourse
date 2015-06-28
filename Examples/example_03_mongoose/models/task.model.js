var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Function to define the model of tasks.
 * See defaults here. For example, completed is put false by default, and Date.now is the default for created.
 * See the Array of subtasks, with a embedded schema inside.
 */
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

