import Ember from 'ember';
export default Ember.Route.extend({

model() {
  return this.store.findAll('blog-post');
},

actions: {

    deletePost(post) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        post.destroyRecord();
      }
    }
  }
});
