/**
 * Created by Jason on 1/11/2016.
 */
// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '831739286955112', // your App ID
        'clientSecret'  : '6f3cdd9b7de03e0b0acb3c74f720fb8f', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '7833664115-226mr7in07g3olgjcn3dgc6a6onspvhk.apps.googleusercontent.com',
        'clientSecret'  : 'AuZc1RBN4Z6YN3XuzNvFzW4T',
        'callbackURL'   : 'http://127.0.0.1:8080/auth/google/callback'
    }

};