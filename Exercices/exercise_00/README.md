#Exercise 00 - MongoDB

The purpouse of this exercise is to practice some MongoDB basic commands and to get familiarized with it.

First of all, download the folder of this example exercise_mongo_00/, and execute the following command line expression to import it:

    mongorestore .../exercise_mongo_00/
    
If this doesn't work, try with the option -d <name_of_db_to_import>

Navigate over the db to see it's structure.

Do the following steps over the db recently imported:

- Find the users of the tech department.
- Find the users with age over 20.
- Find all the users that **aren't** tech.
- Make all the 'rrhh' users to be admins.
- Insert 2 new users on the tech deparment.
- Delete the user with name = h4x0r (It's a hacker!!).
