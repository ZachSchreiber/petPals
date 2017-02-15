import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('videos');
  },

  actions: {

      deleteVideo(post) {
        let confirmation = confirm('Are you sure?');

        if (confirmation) {
          post.destroyRecord();
        }
      }
    }
});
