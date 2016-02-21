(function () {
    var env        = process.env['PRIORITIZE_NODE_ENV'] || 'development';
    console.log('env=[' + env + ']');
    module.exports = {
        mongo: require('./mongo.js')(env),
        web: require('./web.js')(env)
    };

})();