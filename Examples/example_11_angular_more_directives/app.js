/**
 * Created by alberto on 9/6/15.
 */
angular.module('directives',['ngMessages']).controller('TasksController', TasksController);

function TasksController($scope) {
  $scope.formData = {
    showDueDate: false
  };

  $scope.today = new Date();

  $scope.createTask = function() {
    $scope.tasks.push({
      title: $scope.formData.title,
      description: $scope.formData.description,
      dueDate: $scope.formData.dueDate ? $scope.formData.dueDate : null
    });
  };

  $scope.tasks = [];
}