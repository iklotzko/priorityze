var express  = require('express'),
    mongoose = require('mongoose'),
    app      = express(),
    server   = require('http').Server(app),
    io       = require('socket.io')(server),
    redis    = require('redis'),
    os       = require('os'),
    config   = require('./config/config.js'),
    routes   = require('./routes.js');


mongoose.connect('mongodb://' + config.mongo.host + ':' + config.mongo.port + '/' + config.mongo.name);

routes.init(app, express);

app.listen(config.web.port);

console.log('listening on ' + config.web.port);
