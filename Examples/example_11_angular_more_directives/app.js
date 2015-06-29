/**
 * Created by alberto on 9/6/15.
 */
angular.module('directives',[]).controller('TasksController', TasksController);

function TasksController($scope) {
  $scope.taskslist = [
    'Call Saul get me out of prison',
    'Sell the resting meth',
    'Teach something to Jhon Snow'
  ];

  $scope.tasksremoved = [];

  $scope.addToList = function(value) {
    $scope.taskslist.push(value);
  };

  $scope.removeFromList = function(index) {
    var removed = $scope.taskslist.splice(index, 1);
    $scope.tasksremoved.push(removed);
  };
}