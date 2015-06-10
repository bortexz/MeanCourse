angular.module('forms', ['ngMessages']).controller('FormController', FormController);

function FormController($scope) {
  $scope.formData = {
    showDueDate: false
  };
  $scope.today = new Date();
}