var animateApp = angular.module('animateApp', ['ui.router', 'ngAnimate']);

animateApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    	.state('home', {
    		templateUrl: 'page-home.html',
            controller: 'homeController',
            url:'/'
    	})
    	.state('about', {
    		templateUrl: 'page-about.html',
            controller: 'aboutController',
            url: '/about'
    	})
    	.state('contact', {
    		templateUrl: 'page-contact.html',
            controller: 'contactController',
            url:'/contact'

    	});

    	$urlRouterProvider.otherwise('/');

});

animateApp.controller('homeController', function($scope) {
    $scope.pageClass = 'page-home';
    $scope.message = 'This is the home page!';
});

animateApp.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';
    $scope.message = 'This is the about page!';
});

animateApp.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
    $scope.message = 'This is the contact page!';
});
