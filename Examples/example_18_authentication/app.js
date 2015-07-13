angular.module('services', ['ui.router', 'ngMessages']).config(Config);
angular.module('services').run(Run);

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
    }).state('login', {
      url:'/login',
      templateUrl:'templates/login.html',
      controller: 'AuthController'
    }).state('register', {
      url: '/register',
      templateUrl: 'templates/register.html',
      controller:'RegisterController'
    });
  //$urlRouterProvider.otherwise('/login');
}

function Run($window, AuthService, $state) {
  console.log($window.sessionStorage.token);
  if($window.sessionStorage.token) {
    AuthService.getUser().then(function(data){
      $state.go('taskslist');
    }, function(err) {

    });
  } else {
    $state.go('login');
  }
}
