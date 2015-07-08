angular.module('services', ['ui.router', 'ngMessages']).config(Config);

function Config($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('newtask', {
      url: '/newtask',
      templateUrl: 'templates/newtask.html',
      controller: 'NewTaskController'
    })
    .state('taskslist', {
      url: '/taskslist',
      templateUrl: 'templates/taskslist.html',
      controller: 'TasksListController'
    }).state('taskslist.single', {
      url: '/:id',
      templateUrl: 'templates/singletask.html',
      controller: 'SingleTaskController'
    });
  $urlRouterProvider.otherwise('/newtask');
}
