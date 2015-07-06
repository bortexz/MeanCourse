#Contact agenda
In this project, we're going to do a contact agenda, where we are going to manage all of our contacts information. The app must allow us to register, login and manage our resources in an easy way.

basic use cases:
- login
- register
- read/create/update/delete new contacts.
- read/create/update/delete new agendas.

###contacts
Contacts have information like name, surname, company, telephone number, ...
###agenda
An agenda is a group of contacts that are joined for convenience. For example "IT Managers", "Sales"...

How you organize the REST Api and the models of the different resources is up to you.

These are the four basic use cases that your project needs to have.

# Extra things to do
These things are bonus points for those who want to do it.

##Companies
Do another resource of companies. Then the company information about your contacts may point to a company, or create a new one.

##Drag/Drop
Implement a drag and drop for adding contacts to agendas.

See [angular-drag-drop](http://codef0rmer.github.io/angular-dragdrop/#/)

##Nginx
Configure nginx to serve the static content and reverse proxy to the REST API in localhost. Try to configure it with https with selfsigned certificate.

##Connect contacts
You can match new users with their email info with contacts of current users with it's email. Implement a notifications system that notifies you when someone adds you to it's database.

You also may have a list of contacts that have you on their contacts list.

##RealTime chat (hard level)
Use socket.io to build a chat to connect users that have each other on their lists.
