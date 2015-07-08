angular.module('services').controller('AuthController', AuthController);

function AuthController($scope, AuthService, $state) {
  $scope.loginData = {};

  $scope.submit = function() {
    AuthService.login($scope.loginData.username, $scope.loginData.password).then(function() {
      $state.go('taskslist');
    }, function() {
      console.log('fail');
    });
  }
}