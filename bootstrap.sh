#!/usr/bin/env bash

#Get rid of the old node
sudo apt-get purge nodejs npm
apt-get update
sudo apt-get install -y python-software-properties python g++ make
sudo add-apt-repository ppa:chris-lea/node.js
apt-get update
sudo apt-get install -y nodejs
sudo apt-get install -y npm
sudo apt-get install -y git
sudo npm install -g bower
sudo npm install -g rode
#mongo db
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
sudo apt-get update
sudo apt-get install -y mongodb-org
#not sure this should be part of provisioning
mongo priorityze /vagrant/_conf/mongodb/create.js
#redis
sudo apt-get install build-essential
sudo apt-get install tcl8.5
wget http://download.redis.io/releases/redis-stable.tar.gz
tar xzf redis-stable.tar.gz
cd redis-stable
make
sudo make install
#nodemon
sudo npm install -g nodemon
cd /vagrant/
sudo npm install



