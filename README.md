# priorityze set up

#Go to Node and install

#Add Bower via: 
npm install -g bower

#install components via
bower install

#mongo
install mongo on any server
check out code from git
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


#I recommend using nodemon to avoid having to 
