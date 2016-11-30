import Ember from 'ember';

export default Ember.Route.extend({


  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },

  actions: {
    signIn: function(provider) {
      var self = this;

      provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        console.log("LOGIN SUCCESS", token, user);
        Ember.set(self.controller, 'hooplah.isAuthenticated', true);
        Ember.set(self.controller, 'hooplah.currentUser', user);
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.error('LOGIN ERROR', error, email, credential);
      });

    },

    signOut: function() {
      var self = this;
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        console.log('successfully signed out');
        Ember.set(self.controller, 'hooplah.isAuthenticated', false);
      }, function(error) {
        // An error happened.
        console.error('error signed out', error);
      });

      // this.get('session').close();
    },
  }
  });
