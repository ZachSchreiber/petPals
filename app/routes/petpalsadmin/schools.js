import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('schools');
  },


  actions: {

    saveSchool(newPost) {
      newPost.save().then(() => this.transitionTo('petpalsadmin.schoolsedit'));
    },

    deletePost(post) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        post.destroyRecord();
      }
    }
  }
});
