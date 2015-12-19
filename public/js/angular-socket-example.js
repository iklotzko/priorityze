/**
 * Created by iklotzko on 12/19/2015.
 */

    console.log('hiya hiya hiya');
var module = angular.module('socket.io', []);


module.provider('$socket', function $socketProvider() {
    console.log('socket prov:', arguments);
});


