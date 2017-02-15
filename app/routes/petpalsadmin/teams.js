import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('teams');
  },

  actions: {

    saveTeam(newPost) {
      newPost.save().then(() => this.transitionTo('petpalsadmin.teamsedit'));
    },

    upload(e) {
      var file = e.target.files[0];

      var storageRef = firebase.storage().ref('teamImage/' + file.name);

      var task = storageRef.put(file);

      var imgRef = storageRef;
    },

  }
});
