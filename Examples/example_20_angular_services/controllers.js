/**
 * Created by alberto on 12/6/15.
 */

angular.module('taskmanager').controller('CreateTasksController', CreateTasksController);
angular.module('taskmanager').controller('TaskListController', TaskListController);

function CreateTasksController($scope, tasks) {
  $scope.formData = {
    showDueDate: false
  };

  $scope.today = new Date();

  $scope.createTask = function() {
    tasks.createTask($scope.formData);
  }
}

function TaskListController($scope, tasks) {
  $scope.tasks = tasks.getTasks();
}