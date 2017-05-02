import Ember from 'ember';

export default Ember.Controller.extend({

  admin: {
    isAuthenticated: false,
    currentUser: null,
    uid: null
  },
  auth: true,

});
