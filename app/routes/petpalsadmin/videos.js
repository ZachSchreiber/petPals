import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('videos');
  },

  actions: {

    saveVideo(newPost) {
      newPost.save().then(() => this.transitionTo('petpalsadmin.videosedit'));
    },


  }
});
