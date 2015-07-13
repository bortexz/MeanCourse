angular.module('services').controller("NavBarController", NavBarController);

function NavBarController($scope, AuthService, $state) {
  AuthService.getUser().then(function(user) {
    $scope.user = user;
  });

  $scope.logout = function() {
    AuthService.logout();
    $state.go('login');
  }
}
