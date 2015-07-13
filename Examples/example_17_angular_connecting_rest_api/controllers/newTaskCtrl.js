angular.module('services').controller('NewTaskController', NewTaskController);

function NewTaskController($scope, tasksService, $state) {
  $scope.formData = {
    showDueDate: false
  };
  $scope.today = new Date();
  $scope.createTask = function () {
    var newTask = {
      title: $scope.formData.title,
      description: $scope.formData.description,
      dueDate: $scope.formData.dueDate
    };
    tasksService.addTask(newTask).then(function(data){
      $state.go('taskslist', {}, {reload : true});
    }, function(err){
      console.log('Error adding task');
    });

    $scope.formData = {
      showDueDate: $scope.formData.showDueDate
    };
    $scope.taskForm.$setPristine();
  };
}
