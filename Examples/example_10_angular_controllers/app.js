angular.module('tasklist', []).controller('TasksController', TaskController);

function TaskController($scope) {
  $scope.taskslist = [
    'Call Saul get me out of prison',
    'Sell the resting meth',
    'Teach something to Jhon Snow'
  ];

  $scope.addToList = function(value) {
    $scope.taskslist.push(value);
  };

  $scope.removeFromList = function(index) {
    $scope.taskslist.splice(index, 1);
  };
}
