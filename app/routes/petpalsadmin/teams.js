import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('teams');
  },

  model() {
    return this.store.createRecord('teams');
  },

  actions: {

    saveTeam(newPost) {
      newPost.save().then(() => this.transitionTo('petpalsadmin'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    },

    deleteTeam(post) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        post.destroyRecord();
      }
    }
  }
});
