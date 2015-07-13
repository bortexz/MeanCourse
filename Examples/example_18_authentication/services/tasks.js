angular.module('services').factory('tasksService', tasksService);

function tasksService($http, $q, AuthService) {
  var SERVER_URL = 'http://localhost:8080/';

  function getTasks() {
    var q = $q.defer();

    AuthService.getUser().then(function(user){
      return $http.get(SERVER_URL + 'user/' + user.data._id + '/task');
    }).then(function(data) {
      q.resolve(data);
    }, function(err) {
      q.reject(err);
    });

    return q.promise;
  }

  function addTask(newTask) {
    var q = $q.defer();

    AuthService.getUser().then(function(user){
      return $http.post(SERVER_URL + 'user/' + user.data._id + '/task', newTask);
    }).then(function(data) {
      q.resolve(data);
    }, function(err) {
      q.reject(err);
    });

    return q.promise;
  }

  function removeTask(id) {
    var q = $q.defer();

    AuthService.getUser().then(function(user){
      return $http.delete(SERVER_URL + 'user/' + user.data._id + '/task/' + id);
    }).then(function(data) {
      q.resolve(data);
    }, function(err) {
      q.reject(err);
    });

    return q.promise;
  }

  return {
    getTasks: getTasks,
    addTask: addTask,
    removeTask: removeTask
  }
}
