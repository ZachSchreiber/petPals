import Ember from 'ember';

export default Ember.Route.extend({
  model() {
     return this.store.findAll('blog-post', { reload: true })
      .then(post => post.sortBy('title:asc'));
  },


});
