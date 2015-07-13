angular.module('services').controller('RegisterController', RegisterController);

function RegisterController($scope, AuthService) {

  $scope.formData = {};

  $scope.equalPasswords = function() {
    return $scope.formData.password === $scope.formData.retypepass;
  };

  $scope.register = function() {
    AuthService.register($scope.formData.username, $scope.formData.password).then(function(data){

    }, function(err) {

    })
  }

}