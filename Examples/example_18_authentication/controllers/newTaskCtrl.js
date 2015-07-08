angular.module('services').controller('NewTaskController', NewTaskController);

function NewTaskController($scope, tasksService, $state) {
  $scope.formData = {
    showDueDate: false
  };
  $scope.today = new Date();
  $scope.createTask = function () {
    var newTask = {
      title: $scope.formData.title,
      description: $scope.formData.description,
      dueDate: $scope.formData.dueDate
    };
    tasksService.addTask(newTask);

    $scope.formData = {
      showDueDate: $scope.formData.showDueDate
    };
    $scope.taskForm.$setPristine();
    $state.go('taskslist', {}, {reload : true});
  };
}
