angular.module('services').controller('SingleTaskController', SingleTaskController);

function SingleTaskController($scope, tasksService, $stateParams, $state) {
  tasksService.getTasks().then(function(data){
    $scope.task = _.find(data.data, function (chr) {

      return $stateParams.id === chr._id;
    });
  });

  $scope.deleteTask = function() {
    tasksService.removeTask($scope.task._id).then(function(data){
      $state.go('taskslist', {}, {reload: true});
    });
  }
}
