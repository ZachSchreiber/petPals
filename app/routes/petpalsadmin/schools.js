import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('schools');
  },


  actions: {

    saveSchool(newPost) {
      newPost.save().then(() => this.transitionTo('petpalsadmin.schoolsedit'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    },

    deletePost(post) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        post.destroyRecord();
      }
    }
  }
});
