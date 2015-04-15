#JSON Web token authentication
In this example, we're going to see how the users management works, including the authentication (aka login), and how to protect our routes only for registered users.

##How it works?
Briefly, these are the steps on json web token auth:
* After the user is registered, the user makes a post request to a route in our api (usually /token, /authentication, /login,... but could be anything), sending it's username and password.
* The route's main function searches the database for the user, and checks if the password is correct.
* If it's correct, then we encrypt user data with a private key to generate the token. It must be something that identifies the user, like it's id, or even the full object of the user. (This step is done with **jsonwebtoken** module).
* The resultant string token is sent to the user as a response.
* This token will be sent on every request to the API, and whatever we encrypted to generate the token, we will have it on req.user object.(This step is done with **express-jwt** module). This way, we can identify the user making the request, also decide if it's has access to this resource in more complex apis (e.g. admin rights).

##Read more about authentication
###Module's repos
https://github.com/auth0/node-jsonwebtoken
https://www.npmjs.com/package/express-jwt

###Tools and frameworks for complex authentication
https://github.com/GrumpyWizards/DarkLord
http://passportjs.org/
https://auth0.com/
