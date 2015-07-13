angular.module('services').factory('AuthService', AuthService);

function AuthService($http, $window,  $q) {

  var SERVER_URL = 'http://localhost:8080/';
  var user = {};

  function login(username, password) {
    var q = $q.defer();
    $http.post(SERVER_URL + 'authentication', {username: username, password: password}).then(function(data) {
      user.data = data.data.user;
      user.loggedIn = true;
      $window.sessionStorage.token = data.data.token;
      q.resolve();
    }, function() {
      q.reject();
    });
    return q.promise;
  }

  function logout() {
    user.data = {};
    user.loggedIn = false;
  }

  function getUser() {
    var q = $q.defer();

    if(user.data) {
      q.resolve(user);
    } else {
      $http.get(SERVER_URL + 'user').then(function(data) {
        user.data = data.data;
        user.loggedIn = true;
        q.resolve(user);
      }, function(err){
        q.reject(err);
      });
    }
    return q.promise;
  }

  function register(username, password) {
    var q = $q.defer();
    $http.post(SERVER_URL + 'user', {username: username, password: password}).then(function(data){
      q.resolve(data);
    }, function(err) {
      q.reject();
    });
    return q.promise;
  }

  return {
    login: login,
    getUser: getUser,
    logout: logout,
    register: register
  }
}