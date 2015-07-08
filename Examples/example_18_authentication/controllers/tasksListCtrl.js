/**
 * Created by alberto on 6/7/15.
 */
angular.module('services').controller('TasksListController', TasksListController);

function TasksListController($scope, tasksService) {
  $scope.search = {};

  tasksService.getTasks().then(function(data){
    $scope.taskslist = data.data;
  });
}