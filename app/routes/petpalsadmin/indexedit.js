import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('blog-post');
  },

  actions: {

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
