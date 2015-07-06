angular.module('routing').controller('NewTaskController', NewTaskController);

function NewTaskController($scope, $rootScope) {
    $scope.formData = {
      showDueDate: false
    };
    $scope.today = new Date();
    $scope.createTask = function() {
      var newTask = {
        title: $scope.formData.title,
        description: $scope.formData.description,
        dueDate: $scope.formData.dueDate
      };
      $rootScope.taskslist.push(newTask);
    };

    if(!$rootScope.taskslist) $rootScope.taskslist = [];
}
