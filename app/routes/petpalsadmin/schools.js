import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('schools');
  },


  actions: {

    savePost(newPost) {
      newPost.save().then(() => this.transitionTo('petpalsadmin'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    },

    saveTeam(newPost) {
      newPost.save().then(() => this.transitionTo('petpalsadmin'));
    }


  }
});
