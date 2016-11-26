import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('teams');
  },

  actions: {

    saveTeam(newPost) {
      newPost.save().then(() => this.transitionTo('teams'));
    },

    upload(e) {
      var uploader = getElementById('uploader');
      var fileButton = getElementById('fileButton');

      var file = e.target.files[0];

      var storageRef = firebase.storage().ref('teamImage/' + file.name);

       var task = storageRef.put(file);


       task.on('state_changed',
        function progress(snapshot) {
          var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          uploader.value = percentage;
        },

        function error(err) {

        },

        function complete() {

        }
     );
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    },


  }
});
