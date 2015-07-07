angular.module('routing').controller('SingleTaskController', SingleTaskController);

function SingleTaskController($scope, $rootScope, $stateParams) {
  $scope.task = _.find($rootScope.taskslist, function(chr) {
    return $stateParams.task_title === chr.title;
  });

  console.log($scope.task)
}
