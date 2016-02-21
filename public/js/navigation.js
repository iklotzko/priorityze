(function() {
    console.log('i am loaded');
    var app = angular.module('prioritize', ['ngRoute']);
    app.config(function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: '/public/views/home.html'
            })
            .when('/about', {
                templateUrl: '/public/views/about.html'
            })
            .when('/messages', {
                templateUrl: '/public/views/messages.html',
                controller: 'MessagesCtrl'
            })
            .when('/contact', {
                templateUrl: '/public/views/contact.html'
            });
            
        console.log('prioritize module is loaded');
    });
    
    app.controller('MessagesCtrl', function($scope) {
        $scope.messages = 'I am a new message';
    });
    
    
}) ();