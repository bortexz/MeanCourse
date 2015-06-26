/**
 * Created by alberto on 12/6/15.
 */

angular.module('taskmanager').factory('tasks', TasksService);

function TasksService() {
  var tasks = [];
  var service = {
    getTasks: getTasks,
    createTask: createNewTask
  };

  return service;

  function createNewTask(info) {
    tasks.push(info);
  }

  function getTasks() {
    return tasks;
  }

}