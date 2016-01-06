#!/usr/bin/env bash

sudo apt-get purge nodejs npm
apt-get update
sudo apt-get install -y python-software-properties python g++ make
sudo add-apt-repository ppa:chris-lea/node.js
apt-get update
sudo apt-get install -y nodejs
sudo apt-get install -y npm
sudo apt-get install -y git
sudo npm install -g bower
