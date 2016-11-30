import Ember from 'ember';

export default Ember.Controller.extend({

  hooplah: {
    isAuthenticated: false,
    currentUser: null
  },
  auth: true,
});
