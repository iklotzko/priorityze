/**
 * Created by iklotzko on 12/19/2015.
 */

var app = angular.module('example', ['socket.io']);

app.config(function($socketProvider) {
    console.log('configging');
    $socketProvider.setConnectionUrl('http://localhost')
});

app.controller('Ctrl', function Ctrl($scope, $socket) {
    $socket.on('echo', function(data) {
        console.log('hello: ', data);
        $scope.$apply(function() {
            $scope.serverResponse = data;
            $scope.serverResponseACK = data;
        });
    });
    
    $scope.emitBasic = function emitBasic() {
        $socket.emit('echo', $scope.dataToSend);
        $scope.dataToSend = '';
    };
 
    $scope.emitACK = function emitACK() {
        $socket.emit('echo-ack', $scope.dataToSend, function (data) {
            $scope.serverResponseACK = data;
        });
        $scope.dataToSend = '';
    };
});


console.log('hiya hiya hiya');
var module = angular.module('socket.io', []);


module.provider('$socket', function $socketProvider() {
    console.log('socket prov:', arguments);
    var ioUrl = '',
        ioConfig = {
        };
    this.setConnectionUrl = function(url) {
        ioUrl = url;
    };
    
    this.setConfig = function(config) {
        ioConfig = config; 
    };
   
    this.$get = function $socketFactory($rootScope) {
        console.log('get', arguments);
        
        var socket = io(ioUrl, ioConfig);
        
        return {
            on: function on(event, callback) {
                console.log('socket on:', arguments);
                socket.on(event, function() {
                    callback.apply(socket, arguments);
                });
            },
            off: function off(event, callback) {
                console.log('socket off:', arguments);
                if (typeof callback === 'function') {
                    socket.removeListener(event, callback);
                } else {
                    socket.removeAllListeners(event);
                }
            },
            emit: function emit(event, data, callback) {
                console.log('socket emit:', arguments);
                if (typeof callback === 'function') {
                    socket.emit(event, data, function() {
                        $rootScope.$apply(function() {
                            callback.apply(socket, arguments);
                        });
                    });
                } else {
                    socket.emit(event, data);
                }
            }
        }
    }
    
});

