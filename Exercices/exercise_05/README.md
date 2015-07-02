#Exercise 05 - API REST
The eldars (A race evolving from elves) live in big planetary spaceships called Craftworlds. The eldars hierarchy has 3 different ranks, and each one has access to different type of resources.

These three different ranks are:
- Commander
- Warlock
- Soldier

There's also a **special** rank called 'admin'. More details after.

The three types of resource available are:
- Books
- Weapons
- Gates (access code)

The relations are the following:
- Warlocks can access books.
- Soldiers can access weapons.
- Gates has an Array of ranks that have access. E.g ['warklock', 'commander'].

##Admin
The admin is the only rank that can create a new Craftworld. Also, **the admin has the authority to promote a warlock or a soldier to commander**. It's also the responsible of creating/deleting/modifying **new resources as books, weapons or gates**. The admin user is provided in the sample DB.

##Register
In the register process, an eldar must specify the CraftWorld to which he or she wants to belong. This can be made by the name of the CraftWorld or it's ID (Use only one for simplicity if you want). If the Craftworld doesn't exist, then an error is returned.

Also, the register process must specify if he/she is a warlock or a soldier. One cannot register itself as a commander.

##Resources
A resource (book, weapon, gates) can only belong to one of the craftworlds. That is, only an eldar from the **same** craftworld can access it's resources.

There is an example of Schemas for the resources (All own ID ommitted for simplicity).

Book:

    {
        title: String,
        npages: Number,
        craftworld: ObjectID (Ref: Craftoworld)
    }

Weapon:

    {
        model: String,
        calibre: Number,
        craftworld: ObjectID (Ref: Craftworld)
    }

Gates:

    {
        floor: Number,
        accessto: String,
        access_code: String,
        craftworld: ObjectID (Ref: Craftworld)
    }

##User
The user has a Shchema similar to this:

    {
        name: String,
        acess_code: String,
        craftoworld: ObjectID(Ref: Craftworld),
        rank: String
    }

After the register, an User can authenticate itself into the system in order to gain access to the resources he/she can access.

##Craftworld
A craftworld has a Schema similar to this:

    {
        name: String,
        population: Number
    }

##API URLS
Conceptually, each resource belongs only to one craftworld. That is, the url to access a book must be:

    /craftworld/:id_c/book/:id_b

##Work
Create an API rest which manages access to the resources available in each craftworld, depending on the user "logged" in the system.

##(Extra ball)
Write a node.js program to test all the system. Use http.request ([or any other module](https://www.npmjs.com/package/request)) to make requests to your localhost:8080 server and log/check all the responses to see if they're the expected ones.

You can also create a program that interacts with command line with the module [commander](https://www.npmjs.com/package/commander)

##(Extra ball)
Add coordinate_x and coordinate_y to Craftworlds. Allow eldars of a craftworld to access the resources of another craftworld near them. Remember Pithagoras for calculate distance! Consider "near" the distance you want.

##(Extra ball)
Add stock to books and weapons. A field stock: Number. When someone get's a resource, the stock is decreased by one. The users would have a field called resources: [ObjectID] with all the resources they have.

To release an object, do another GET to the same object, and if you already have it, you do a release, increasing by one the stock.

If there isn't stock of any resource, access is not authorizded!
