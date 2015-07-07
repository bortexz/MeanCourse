/**
 * Created by alberto on 6/7/15.
 */
angular.module('routing').controller('TasksListController', TasksListController);

function TasksListController($scope, $rootScope) {
  $scope.search = {};
  $scope.taskslist = $rootScope.taskslist;
}