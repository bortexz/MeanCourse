angular.module('services').factory('AuthService', AuthService);

function AuthService($http, $window,  $q) {

  var SERVER_URL = 'http://localhost:8080/authentication/';
  var user = {};

  function login(username, password) {
    var q = $q.defer();
    $http.post(SERVER_URL, {username: username, password: password}).then(function(data) {
      user = data.data;
      console.log(user);
      $window.sessionStorage.token = user.token;
      q.resolve();
    }, function() {
      console.log('FAILED');
      q.reject();
    });
    return q.promise;
  }

  function getUser() {
    return user;
  }

  return {
    login: login,
    getUser: getUser
  }
}