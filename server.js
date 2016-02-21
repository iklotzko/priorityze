var express  = require('express'),
    mongoose = require('mongoose'),
    app      = express(),
    server   = require('http').Server(app),
    io       = require('socket.io')(server),
    redis    = require('redis'),
    os       = require('os');


var mdbUser = 'priorityze',
    mdbHost = 'wells',
    mdbPort = '27017',
    mdbName = 'priorityze';

mongoose.connect('mongodb://' + mdbHost + ':' + mdbHost + '/' + mdbName);

var ChatSchema = mongoose.Schema({
    created : Date,
    content : String,
    username: String,
    room    : String
});

var Chat = mongoose.model('Chat', ChatSchema);

//app.use(express.static(__dirname + '/public'));

app.get('/bower_components/:module/:name', function (req, resp) {
    sendOutJS(req, resp, 'bower_components');
});
app.get('/public/js/:name', function (req, resp) {
    sendOutJS(req, resp, 'custom');
});

app.get('/', function (req, resp) {
    console.log('req=', req['route']);
    resp.sendFile(__dirname + '/public/index.html');
});

var text = '';

//subber
//pubber
/*var redisClient2 = redis.createClient(6379, 'wells');
redisClient2.on('error', function (err) {
    console.log('redis client2 received error', err);
});

setInterval(function () {
    var secretMessage = 'This is a secret message of: ' + Math.random() * 1000 + ' from ' + os.hostname();
    redisClient2.publish('priorityze-channel', secretMessage);
    console.log('published (priorityze-channel): ' + secretMessage);
}, 500);*/
