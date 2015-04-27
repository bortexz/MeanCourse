#JSON Web token authentication
In this example, we're going to see how the users management works, including the authentication (aka login), and how to protect our routes only for registered users.

##How it works?
Briefly, these are the steps on json web token auth:
* After the user is registered, the user makes a post request to a route in our api (usually /token, /authentication, /login,... but could be anything), sending it's username and password.
* The route's main function searches the database for the user, and checks if the password is correct.
* If it's correct, then we encrypt user data with a private key to generate the token. It must be something that identifies the user, like it's id, or even the full object of the user. (This step is done with **jsonwebtoken** module).
* The resultant string token is sent to the user as a response.
* This token will be sent on every request to the API, and whatever we encrypted to generate the token, we will have it on req.user object.(This step is done with **express-jwt** module). This way, we can identify the user making the request, also decide if it's has access to this resource in more complex apis (e.g. admin rights).

##About the example
In this example, we will use the users routes to show how the authentication works.

The important here is where to put the express-jwt middleware. We must define a route to where authentication will be done,
but sometimes we don't need all the routes to need authentication. The route to authenticate cannot require authentication!

A possible approach is to define all the paths that need authentication on /api/... (/api/users or /api/tasks) adding
the auth middleware to /api/. Another example could be to define authentication in all routers calling unless() and adding
the array of routes that don't need auth (jwt({secret: 'some-secret'}).unless({path: [arrayofpaths]})).

In this example, the routes that need to be authenticated are all of users unless post /users/ that is a register. So, 
the middleware is defined in the routes that need it (see routes/users.js).

##Read more about authentication
###Module's repos
* https://github.com/auth0/node-jsonwebtoken
* https://www.npmjs.com/package/express-jwt

###Tools and frameworks for complex authentication
* https://github.com/GrumpyWizards/DarkLord
* http://passportjs.org/
* https://auth0.com/
