angular.module('services').factory('tasksService', tasksService);

function tasksService($http, $q) {
  var SERVER_URL = 'http://localhost:8080/tasks/';

  function getTasks() {
    var q = $q.defer();
    $http.get(SERVER_URL).then(function(data){
      q.resolve(data);
    }, function(){
      q.reject();
    });

    return q.promise;
  }

  function addTask(newTask) {
    var q = $q.defer();
    $http.post(SERVER_URL, newTask).then(function(data){
      q.resolve(data)
    }, function(){
      q.reject(data);
    });
    return q.promise;
  }

  function removeTask(id) {
    var q = $q.defer();
    $http.delete(SERVER_URL + id).then(function(data){
      q.resolve(data);
    }, function(data) {
      q.reject(data);
    });
    return q.promise;
  }

  return {
    getTasks: getTasks,
    addTask: addTask,
    removeTask: removeTask
  }
}
