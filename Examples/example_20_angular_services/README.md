#Angular Services
Services are javascript singleton javascript objects. They're used for various reasons:

- Separate business logic from controllers
- Connect to HTTP apis
- Use localStorage and Cookies
- Using graphical elements like modals
- Maintain the state of the application

There are lots of services by default in angular, ($sessionStorage, $http, ...). We will be facing theme during the course, but for now, let's learn to create our own Service and maintain the state of our tasks separately in a service instead of a controller.

To create a Service, we can do:

    angular.module('myApp')
        .factory('tasksService', function() {
        var tasks;
        var serviceInstance = {
            getTasks: tasks
        };
        // Our first service
        return serviceInstance;
    });

There are other ways to instantiate it, but we aren't looking them for now.

See more info about [factory vs service vs provider](http://tylermcginnis.com/angularjs-factory-vs-service-vs-provider/)

To use a service inside a controller inject it by it's name.

    angular.module('myApp').controller('taskController', function($scope, tasksService){
        //Here you can use tasksService.tasks
    })
