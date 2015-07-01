#Exercise 04 - Authentication and Authorization

Imagine that we have spacecrafts that want to land on a spaceport. The planet where we want to land has 3 different types of spaceports, each one with it's corresponding coordinates.

The spaceport we are redirected will depend on the weight of our spacecraft, and we will have three types of spaceports. The weight can be 'small', 'medium' and 'large'.

The spacecraft has an identifier and a security_code, that will authenticate it over the platform, in order to access the coordinates of it's corresponding spaceport.

So, the model of the spacecraft it's like this:

    {
        identifier: String,
        security_code: String,
        weight: String
    }

And the model of the spaceport it's the following:

    {
        weight: String,
        coordinate_x: Number,
        coordinate_y: Number
    }

We will have 2 routes:

#### /authenticate

Accepts a POST verb with identifier and security_code, and returns a token that guarantees access to a spaceport.

#### /landing

Accepts only a GET verb, and returns the coordinates of the spaceport **depending** on the size of the spacecraft that wants to land. **It must be authenticated to use this!**

Implement the code that will manage the landing of spacecrafts.
