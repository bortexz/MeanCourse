#Angular More Routing
In this example we will see two more concepts about routing.

##Router params
First of all, how to pass parameters to any state. In order to do that, we must include the parameter in the url config of the state:

    {
        url: '/task/:task_id'
    }

To pass a parameter with ui-sref, do the following:

    <a ui-sref="task({task_id : 2i34io234})">Go to task</a>

Finally, if we want to access the parameters inside a controller, we do it like this:

    function Controller($stateParams) {
        $stateParams.task_id;
        //results in 2i34io234
    }

More on parameters [here](https://github.com/angular-ui/ui-router/wiki/URL-Routing)

##Nested views
We can nest views one inside another with ui router. To create a substate from one state, only specify it in the config with dot ('.') notation, like this:

    state('task',{
            //parent state
            url: '/tasks'
    })

    state('task.single', {
            //child state
            url: '/:task_id'
            //Will be /tasks/{task_id}
    })

The template of the task state **must** include a ui-view directive to put the new substate in.
