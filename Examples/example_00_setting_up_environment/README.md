#Setting up environment
This example only consist of this README with some instructions to install the required software.
##Downloading MongoDB

### Mac OS X
Best option to install on mac is to use Homebrew (http://brew.sh/)

Update Homebrew

    brew update

Install mongodb

    brew install mongodb

After the installation is complete, create a directory /data/db to use (/data/db is the default path that mongo will use).

    sudo mkdir /data/db

And then make yourself the owner, so Mongo doesn't find trouble opening the folder

    sudo chown $USER /data/db

After that, we will be able to run the mongo server

    mongod

A message like "waiting for connections on port 27017" will appear if all went ok.
### Windows

Go to https://www.mongodb.org/downloads and download your package.

After the installation, you will have C:\mongodb with the executables of MongoDB.

Create the folder C:\data\db.

Go to C:\mongodb\bin and execute mongod. If all went ok, you must see a message "waiting for connections on port 27017".

##Downloading Node.JS

### Mac OS X

Same as MongoDB, use Homebrew for install node

    brew install node

That's all.

### Windows

Go to http://nodejs.org/#download and download the Windows installer.

Install it and your done.

## (Optional) Jetbrains WebStorm for developing

It's recommended to use WebStorm for developing large web projects.

You can download it at https://www.jetbrains.com/webstorm/

If you register yourself with your UPC account, you will have it for free for educational purposes! Or you can use
the 30-day free trial.
