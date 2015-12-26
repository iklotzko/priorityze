# priorityze set up

#Go to Node and install rode

#server side dependencies (managed via npm and package.json)
npm install

#client side dependencies (managed via bower and bower.json)
bower install

#mongo
You have to install a mongo db server
This is straight forward, can be done anywhere, linux/windows/mac
cd ${root}/_conf/mongodb/
go to server and type at cmd line:
$mongo
you are now in mongo shell, create db
>use priorityze
>load('create.js')
System should respond and say user padmin@priorityze is created

#mongo user:
user: padmin
pwd : p123

For the moment we'll use that for all db stuff, as the project matures--and our knowledge of mongo increases--we will break this up into different users with different roles.

#redis
You have to install a redis db/key store server
It does not work on windows.
In shell:

$ wget http://download.redis.io/releases/redis-3.0.6.tar.gz
$ tar xzf redis-3.0.6.tar.gz
$ cd redis-3.0.6
$ make

To run redis: 
$ src/redis-server

#I recommend using nodemon to avoid having to restart nodejs each time

nodemon server.js

#Linux 
By default ports < 1024 require root privileges so
use sudo
sudo nodemon server.js
