angular.module('forms', ['ngMessages']).controller('FormController', FormController);

function FormController($scope) {
  $scope.formData = {
    showDueDate: false
  };
  $scope.today = new Date();

  $scope.createTask = function() {
    $scope.task = "Created task " + $scope.formData.title;
    if($scope.formData.showDueDate && $scope.formData.dueDate ) $scope.task += " to do before " + $scope.formData.dueDate.toString();
  }
}