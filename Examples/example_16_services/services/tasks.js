angular.module('services').factory('tasksService', tasksService);

function tasksService() {
  var taskslist = [];

  var addTask = function(task) {
    taskslist.push(task);
  };

  var removeTask = function($index) {
    taskslist.splice($index, 1);
  };

  return {
    tasks: taskslist,
    addTask: addTask,
    removeTask: removeTask
  }
}
