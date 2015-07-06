angular.module('routing', ['ui.router', 'ngMessages']).config(Config);

function Config($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('newtask', {
            url: '/newtask',
            templateUrl: 'newtask.html'
        })
        .state('taskslist', {
            url:'/taskslist',
            temapleteUrl: 'taskslist.html'
        });
        
    $urlRouterProvider.otherwise('/newtask');
}
