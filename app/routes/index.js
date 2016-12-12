import Ember from 'ember';

export default Ember.Route.extend({
  model() {
     return this.store.findAll('blog-post', { reload: true })
      .then(post => post.sortBy('title:asc'));
  },

  // session: Ember.inject.service('session'),
  //
  // beforeModel: function() {
  //   if (!this.get('session.isAuthenticated')) {
  //     this.transitionTo('index');
  //   } else {
  //     this.transitionTo('petpalsadmin');
  //   }
  // },





});
