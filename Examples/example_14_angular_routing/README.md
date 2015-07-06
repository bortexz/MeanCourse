#Angular Routing

###URL Routing
The most basic approach of routing is to map an url to an HTML template in our application. This way, we can make our single page app act as a normal webpage that changes it's content.

###State Routing
State routing behave similar to URL routing, but allow us to change the state of the app without having to change the URL.

##Using ui.router for routing
We will use a module called UI Router to do routing. To import it, you can use this cdn:

    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.15/angular-ui-router.js"></script>

###uiView
We use the directive uiView where we want to load any state content. In that uiView, ui.router will load the template selected, and will change the template if needed.

    <div ui-view></div>

###uiSref
The directive uiSref is the alternative to the classical href with our new states approach. It links to a new State.

    <a ui-sref="home"></a>

###COnfiguring states
To configure our states, we will use config() inside our module.

    routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })

        .state('/other', {
            //We can concatenate creation of states.
        });
    });

See how we link to different html files without needing to ngInclude it. ui.router manages all this itself.
