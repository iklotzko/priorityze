(function() {
    
    module.exports = {
        init: function(app, express) {
            //app.use(express.static(__dirname + '/public/views'));
            
            var root = {
                root: __dirname
            };
            
            app.use(express.static(__dirname + '/'), function(req, res) {
                res.sendFile('public/views/index.html', root);
            });
            app.use(express.static(__dirname + '/bower_components'));
            
        }
    } 
    
}) ();