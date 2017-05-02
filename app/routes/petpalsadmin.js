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
        var uid = result.user.uid;
        //console.log(uid);
        //query the firebase database for the uid. "once" that's done, we want the value of the uid and then call the callback function with the result aka "snapshot", and assigning it to data. Yes I'm using es6. Then compare the firebase uid (data) with the uid of the person trying to login.
        var firebaseUid = firebase.database().ref("admin");
        firebaseUid.once('value', (snapshot) => {
          var data = snapshot.val() || {};
          //console.log(data);
          if (uid === data) {
            Ember.set(self.controller, 'admin.isAuthenticated', true);
            Ember.set(self.controller, 'admin.currentUser', user);
            Ember.set(self.controller, 'admin.uid', uid);
          } else if(!data.uid) {
            firebaseUid.set({
              admin: uid
            });
            Ember.set(self.controller, 'admin.isAuthenticated', true);
            Ember.set(self.controller, 'admin.currentUser', user);
            Ember.set(self.controller, 'admin.uid', uid);
          } else {
            alert("Sorry, you are not an admin.");
          }
        });
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.error('LOGIN ERROR', error, email, credential);
      }).then(() => this.transitionTo('petpalsadmin.index'));

    },

    signOut: function() {
      var self = this;
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        Ember.set(self.controller, 'admin.isAuthenticated', false);
      }, function(error) {
        // An error happened.
        console.error('error signed out', error);
      }).then(() => this.transitionTo('/'));
;

      // this.get('session').close();
    },
  }
  });
