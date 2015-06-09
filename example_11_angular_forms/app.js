angular.module('forms', ['ngMessages']).controller('FormController', FormController);

function FormController($scope) {
  $scope.races = [
    'Human',
    'Elf',
    'Undead',
    'Troll',
    'Wargen',
    'Goblin',
    'Pandaren'
  ];

  $scope.formData = {
    race:  $scope.races[0],
    prof: 'Mage'
  };

  $scope.submit = function () {
    $scope.submitted = "You're a " + $scope.formData.race  + " " +$scope.formData.prof + " called " + $scope.formData.nickname;
  }
}