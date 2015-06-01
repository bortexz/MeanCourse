#Angular Controllers
Controllers are plain javascript objects that are used to connect the view with internal logic (for example getting the list of tasks of a REST api).

##Modules
Before explaining controllers, we must introduce modules. A module could be an entire application or a subset of views/controllers/services that are merged into one module for functionality.

When we write ng-app="tasklist" it means that we are using a module called tasklist inside our application. The module tasklist is created with:

        angular.module('tasklist', [/* dependencies */]);

If we want to get the module with name 'tasklist', we do it the same way without dependencies.

        angular.module('takslist');

##Controllers
After that, we can add a controller to our recently created module with:

    angular.module('tasklist', []).controller('TaskController', TaskController);

    var TaskController = function(/* dependencies */) {

    }

As you can see, dependencies goes into the arguments of the function. This is called Dependency Injection, we aren't going to enter into detail on that.

To use a controller inside a view, we use with the directive ng-controller, using the name given before.

    <div ng-controller="TaskController"> </div>

##Scope
The scope is what the view and the controller share. The view can call functions of the scope, and the controller can define functions into that scope. Same with variables. To use the $scope we must include it as a dependency in the controller declaration.

    var TaskController = function($scope) {
        $scope.firstName = 'jhon';
    }

Using the $scope inside the view is quite easy, just call whatever's inside it.

    <span>{{firstName}}</span>
    
##ng-click
ng-click is used to bind the click event to a function in the scope of the controller binded to that element. We will see
other HTML events on detail later.