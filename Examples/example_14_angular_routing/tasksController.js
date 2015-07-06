angular.module('routing').controller('TasksController', TasksController);

function TasksController($scope) {
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
