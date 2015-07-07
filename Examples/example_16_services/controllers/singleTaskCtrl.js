angular.module('services').controller('SingleTaskController', SingleTaskController);

function SingleTaskController($scope, tasksService, $stateParams) {
  $scope.task = _.find(tasksService.tasks, function (chr) {
    return $stateParams.task_title === chr.title;
  });
}
