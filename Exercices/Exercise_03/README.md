#Exercise 03 - Node.js, express, Mongoose
The galactic republic has contacted us to manage all the data they have about the universe and the races that live in it. They've specified exclusively the attributes and data they want to collect, and they've sent us this:

##Resources
planets

    {
        name,
        diameter,
        climate,
        population,
        rotation_period (hours),
        orbital_period(days)
    }

ships

    {
        name,
        model,
        manufacturer,
        passengers (number of),
        max_speed,
        cost
    }

races

    {
        name,
        average_height,
        skin_colors (array strings),
        homeworld (references a planet),
        language
    }

people

    {
        name,
        height,
        mass,
        homeworld(references a planet),
        race (references a race),
        ships(references ship)
    }

##Referencies
With referencies, apply the following approach:

 For example, in people, the homeworld, race, ships will be sent as **strings** by the client. Our API must find if there's any resource with that name, and create the reference. If the reference doesn't exists, we create a new one with the name given.

 ##Work
 Create an API REST with express and mongoose to collect all this data. That means, we can add new entries, get the current entries (all of them, or a single one by it's _id), modify any of the entries or delete it.

 Nice recollect!
