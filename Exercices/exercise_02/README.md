#Exercise 02 - Node.js, express, MongoDB

Watto, a toydarian with a store in Mos Espa, wants a program to register all his goods. He needs an API to manage his store.

His second-hand goods can be of two different types, pieces and full spacecrafts.

Of each type, we know for sure every resource has an ID. Each piece must have a type, and each spacecraft must have a model. The other attributes are optional. E.G, a piece could have these attributes:

    {
        _id: 'ObjectID',
        type:'engine',
        cost: 192,
        location: 'stand3'
    }

And the spacecraft:

    {
        _id:'ObjectID',
        model:'delta-7',
        maxspeed: 892,

    }

This is an example, feel free to put whatever you want!

Watto asked us to write the API to interact with. He needs to do the following tasks over the two different resources:

- Get a full list with id and type(pieces) or model(spacecrafts). (See lodash library to pick only certain attributes of an object).
- Get details (all parameters) of a resource through it's ID.
- Create a new one of each (Check if all attributes are correct before inserting into DB!)
- Modify a single resource.
- Delete a single resource.

##Dealing with ID's
The _id attribute is generated automatically by MongoDB when we insert some document. When in function(err, result) we access result.ops, we can see the inserted documents with the corresponding _id generated.

Note that, when we do

    find({}).toArray(function(err, result){

    })

Also, when we insert and access:

    result.ops

The result is also with ID's in string format.

But don't forget, a _id is of format ObjectID of bson, if you ever find your ID in ObjectID format, see [these docs](https://mongodb.github.io/node-mongodb-native/api-bson-generated/objectid.html) to transform between string and ObjectID.
