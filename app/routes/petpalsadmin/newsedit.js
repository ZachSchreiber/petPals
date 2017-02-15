import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('news');
  },

  actions: {

      deleteNews(post) {
        let confirmation = confirm('Are you sure?');

        if (confirmation) {
          post.destroyRecord();
        }
      }
    }
});
