angular.module('forms', ['ngMessages']).controller('FormController', FormController);

function FormController($scope) {
  //Form data
  $scope.formData = {
    showDueDate: false
  };
  $scope.today = new Date();

  //Tasks
  $scope.taskslist = [];
  $scope.createTask = function() {
    var newTask = {
      title: $scope.formData.title,
      description: $scope.formData.description,
      dueDate: $scope.formData.dueDate
    };
    $scope.taskslist.push(newTask);
  };
  $scope.search = {};
}