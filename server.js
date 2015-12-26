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

var sendOutJS = function (req, resp, mdl) {
    console.log('sending out js');
    if (mdl === 'bower_components') {
        resp.sendFile(__dirname + '/bower_components/' + req.params.module + '/' + req.params.name);
    } else if (mdl === 'custom') {
        resp.sendFile(__dirname + '/public/js/' + req.params.name);
    } else {
        resp.send('huh? mdl shouldnt be ', mdl);
        console.log('error error mdl = ', mdl);
    }
};

app.get('/', function (req, resp) {
    console.log('req=', req['route']);
    resp.sendFile(__dirname + '/public/index.html');
});

app.post('/setup', function (req, resp) {
    console.log('setting up');
    var chatData = [{
        created : new Date(),
        content : 'Hi',
        username: 'Chris',
        room    : 'php'
    }, {
        created : new Date(),
        content : 'Hello',
        username: 'Obinna',
        room    : 'laravel'
    }, {
        created : new Date(),
        content : 'Ait',
        username: 'Bill',
        room    : 'angular'
    }, {
        created : new Date(),
        content : 'Amazing room',
        username: 'Patience',
        room    : 'socet.io'
    }];
    for (var c = 0; c < chatData.length; c++) {
        var newChat = new Chat(chatData[c]);

        newChat.save(function (err, chat) {
            console.log('saved: ', chat);
        });
    }
    resp.send('created');
});
app.get('/msg', function (req, resp) {
    Chat.find({
        'room': req.query.room.toLowerCase()
    }).exec(function (err, msgs) {
        console.log('msgs=', msgs);
        console.log('err=', err);
        resp.json(msgs)
    });
});

var text = '';

var redisClient1 = redis.createClient(6379, 'wells');
redisClient1.on('error', function (err) {
    console.log('redis client1 received error', err);
});
io.on('connection', function (socket) {
    console.log('just received a connection');


    socket.on('echo', function (data) {
        text += data;
        console.log('client is asking for an echo on: ', data);
        socket.emit('echo', data);
        console.log('echoed');
    });
    socket.on('echo-ack', function (data, callback) {
        console.log('ack requested: ', [data, callback]);
        callback(data);
    });

    var i = 0;
    // setInterval(function () {
    //     socket.emit('echo', 'hiya: ' + '[' + text + ']=' + (i++));
    //}, 500);


    redisClient1.on('message', function (channel, message) {
        console.log('we are getting a message from channel 2');
        socket.emit('redis-msg', message);
    });
    redisClient1.subscribe("priorityze-channel");

});


var port = 80;

server.listen(port, function () {
    console.log('huh');
    console.log('server is listening on port ' + port);
});


//subber
//pubber
var redisClient2 = redis.createClient(6379, 'wells');
redisClient2.on('error', function (err) {
    console.log('redis client2 received error', err);
});

setInterval(function () {
    var secretMessage = 'This is a secret message of: ' + Math.random() * 1000 + ' from ' + os.hostname();
    redisClient2.publish('priorityze-channel', secretMessage);
    console.log('published (priorityze-channel): ' + secretMessage);
}, 500);
