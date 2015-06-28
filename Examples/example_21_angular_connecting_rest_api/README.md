#Angular - Connecting to a REST api
In this example, we will see hoe to connect to an API rest with angular.

The main service to use here is $http, which will let us to connect to servers via AJAX querys.

Before getting to the point, let's review a pattern used by this service, promises.

##Promises
A promise is a way to implement asynchronous functions but without the mess of callbacks. It provides a different approach to those. Let's see the same function implemented with callbacks and with promises to understand the difference:

Callbacks:

    function asynchronous(callback) {
        /*
            Here some asynchronous work
        */
        if(error) {
            callback(error, null);
        } else {
            callback(null, data);
        }
    }

    function caller() {
        asynchronous(function(err, data){
            if(err) /* error inside asynchronous call */
            else {
                console.log('Finished' + data);
            }
        });
    }

Promises:

    function asynchronous() {
        var q = $q.defer();

        /*
            Some asynchronous work
        */
        if(error) {
            q.reject(error);
        } else {
            q.resolve(data);
        }

        return q.promise;
    }

    function caller() {
        asynchronous().then(function(data){
            console.log('Finished' + data)
        }, function(error) {
            /* function to execute when error */
        })
    }

    /* Sometimes promises can also be found that way*/
    function caller() {
        asynchronous().success(function(data){
            console.log('Finished' + data)
        }).error(function(error) {
            /* function to execute when error */
        });
    }

##HTTP Service
Angular offers a default http service to connect to apis. You can use it from many different ways. First way to use it is to call the verb you want to use (with anything but get, you have a second parameter with data):

    //GET
    $http.get('http://localhost:9000').success(function(data,status, headers, config){
        //Handler of success
    }).error(function(data,status, headers, config){
        //Handler of error
    });

    //POST
    $http.post('http://localhost:9000', {data:data}).success(function(data,status, headers, config){
        //Handler of success
    }).error(function(data,status, headers, config){
        //Handler of error
    });

    ...
    //And the same as post with other verbs like patch, delete, put, ...

Other way to use the $http service is to call it directly as a function with a config object that contains all the information needed by http:

    var req = {
        method: 'POST',
        url: 'http://example.com',
        headers: {
            'Content-Type': undefined
        },
        data: { test: 'test' }
    }

    $http(req).success(function(){...}).error(function(){...});
