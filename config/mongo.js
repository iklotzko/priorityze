(function() {
    
    var dbConfig = {};

    dbConfig.development = {
        user: 'prioritize',
        host: 'localhost',
        port: 27017,
        name: 'prioritize'
    };
    dbConfig.ira = {
        user: 'prioritize',
        host: 'wells',
        port: 27017,
        name: 'prioritize'
    };

    dbConfig.jason = {
        'user': 'priorityze',
        'host': 'localhost',
        'port': '27017',
        'name': 'priorityze'
    };

    module.exports = function(env) {
        return dbConfig[env];
    };
    
}) ();