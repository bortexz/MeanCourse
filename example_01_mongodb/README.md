#MongoDB essentials

The purpose of this example is to show how MongoDB works from console and with the default drivers for node.js

Here you have a brief of commands to use with mongoDB console:

##MongoDB CLI (Command line interface)

First of all, we need to start the daemon server with

    mongod

Now, open a different terminal

    mongo

With that, you have a command line interface to interact with the mongoDB database.

    show dbs

Will show all the databases in the server. To use a new database for making request against

    use <dbname>

If it's not created, mongo will create it for you when you enter any document.

If we want to know the collections of a database

    use <dbname>
    show collections

##CRUD Operations (Create, Read, Update, Delete)

###Create
Insert documents is easy, we only need to pass the object.

    db.users.insert({name:"admin", status:"admin", age:20})

###Read
We can read all the documents. See that an ObjectID is created for every document, used as an unique identifier.

    db.users.find().pretty()

To use a criteria:

    db.users.find({name: 'admin'})
    db.users.find({age: {$gt: 18}})
    db.users.find({age: {$lt: 25}, name:'admin'}) // AND operation
    db.users.find({$or: [{age: {$lt: 25}}, {name: 'admin'}]}) //OR operation

###Update
The update contains 2 parameters, first a query criteria, and second the operation to do.

    db.users.update({name: 'admin'}, {$set:{age: 27}})
    db.users.update({name: 'admin'}, {$inc:{age: 2}})

###Delete
Use a criteria to match a document to delete

    db.users.remove({name: 'casualuser'})


Refer to MongoDB docs for more options: http://docs.mongodb.org/manual/core/crud-introduction/