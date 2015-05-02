#Task Manager API

This is an example of a working API for a basic task manager app. Also, this README will serve you as an example for documenting an API, and to understand the documentation of others. The documentation approach is based on [Blueprint](https://github.com/apiaryio/api-blueprint/blob/master/Tutorial.md).

##Documentation

FORMAT: 1A

###Task manager
Task manager is an API for managing tasks of individual users.

####Authentication [/authentication]
#### Get token [POST]
+ Request (application/json)

        {
            "username":"albertofer",
            "password":"12345678"
        }

+ Response (application/json)

        {
            "user": {
                "_id": "5544f0e2dbf7ed6c06cdff21",
                "username": "albertofer",
                "tasks": [
                    "5544f661cb41f99206900f22"
                ],
                "is_admin": false,
                "__v": 1
            },
            "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1NTQ0ZjBlMmRiZjdlZDZjMDZjZGZmMjEiLCJ1c2VybmFtZSI..."
        }

####Users collection [/users]
#####List All Users [GET]
+ Response 200 (application/json)

[
    {
        "username": "jedi",
        "password": "12345678",
        "tasks": ['']
    },
    {
        "username": "bertofer",
        "password": "983dsaas",
        "tasks": ['']
    }
]

####User

####Tasks collection

####Task

##Other libraries used
In this example, some new libraries and modules has been user. There you have a list of them:
+ [lodash](https://lodash.com/) Refactor of other library called underscore, useful for managing objects and collections.
+ [bcrypt](https://www.npmjs.com/package/bcrypt) Library used to hash passwords and verify hashes.

##Other considerations for complex APIs
Error handling, versioning, processmanager, extra-services(mail, valid, password...)
