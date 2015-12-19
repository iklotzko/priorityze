var express  = require('express'),
    mongoose = require('mongoose'),
    app      = express(),
    server   = require('http').Server(app),
    io       = require('socket.io')(server);


var mdbUser = 'priorityze',
    mdbHost = 'wells',
    mdbPort = '27017',
    mdbName = 'priorityze';

mongoose.connect('mongodb://' + mdbHost + ':' + mdbHost + '/' + mdbName);

var ChatSchema = mongoose.Schema({
    created: Date,
    content: String,
    username: String,
    room: String
});

var Chat = mongoose.model('Chat', ChatSchema);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, resp) {
    resp.sendFile('index.html');
});

app.post('/setup', function(req, resp) {
    console.log('setting up');
    var chatData = [{
        created: new Date(),
        content: 'Hi',
        username: 'Chris',
        room: 'php'
    }, {
        created: new Date(),
        content: 'Hello',
        username: 'Obinna',
        room: 'laravel'
    }, {
        created: new Date(),
        content: 'Ait',
        username: 'Bill',
        room: 'angular'
    }, {
        created: new Date(),
        content: 'Amazing room',
        username: 'Patience',
        room: 'socet.io'
    }];
    for (var c = 0; c < chatData.length; c++) {
        var newChat = new Chat(chatData[c]);
        
        newChat.save(function(err, chat) {
            console.log('saved: ', chat);    
        });
    }
    resp.send('created');
});
app.get('/msg', function(req, resp) {
    Chat.find({
        'room': req.query.room.toLowerCase()
    }).exec(function(err, msgs) {
        console.log('msgs=', msgs);
        console.log('err=', err);
        resp.json(msgs)
    });
});


var port = 80;

server.listen(port, function () {
    console.log('huh');
    console.log('server is listening on port ' + port);
});
