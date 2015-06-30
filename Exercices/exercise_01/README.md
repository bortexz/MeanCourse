#Exercise 01 - MongoDB, Node.JS

The jedi temple wants to register all the lightsabers in use, in order to have more control over all the lightsabers spread over the universe.

For that purpose, we need a program that receives a request with the following query parameters, and save the data in our MongoDB instance.

We also need to look for lightsabers depending on their color.

Write a program that receives a request on /lightsaber, and returns:
- true if added.
- List of lightsabers if asked (in JSON).


##Query example

Add lightsaber:

    method 'POST':
    /lightsaber?color=blue&owner=obiwan&id=12345

Get lightsabers by color:

    method 'GET':
    /lightsaber?color=blue

##Reading parameters
To read the parameters of the url accessed, use the following code over request.url

    require('url').parse('/status?name=ryan', true);

results in:

    {
        href: '/status?name=ryan',
        search: '?name=ryan',
        query: { name: 'ryan' },
        pathname: '/status'
    }

##Reading method
Reading the method in the request is easy, only access request.method and you get it ('GET', 'POST', ...).

##Connecting to mongoDB
Frist of all, install mongodb by:

    npm install mongodb

Connect to db:

        // Retrieve
    var MongoClient = require('mongodb').MongoClient;

    // Connect to the db
    MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
      if(!err) {
        console.log("We are connected");
      }
    });

Get collections:

    // Get the documents collection
    var collection = db.collection('documents');

Insert:

    collection.insert(/*Obj or array of objects to inset*/{}, function(err, result){
        //results.ops return the objects inserted with their new _id field.
    });

Find:

    collection.find({name: 'first user'}).toArray(function (err, result) {
        
    });

For more info about the mongoDB node.js driver, go [here](https://mongodb.github.io/node-mongodb-native/api-articles/nodekoarticle1.html)

##Returning JSON as result
To return the JSON object returned from mongoDB, use JSON.stringify(result). It will format it as a string, and you will be able to return it with response.end();
