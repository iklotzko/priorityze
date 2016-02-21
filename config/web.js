(function() {

    var web = {};

    web.development = {
        port: 8080
    };
    web.ira = {
        port: 80
    };

    web.jason = {
        port: 80
    };

    module.exports = function(env) {
        return web[env];
    };

}) ();

