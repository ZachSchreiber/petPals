import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('news');
  },

  actions: {

    saveNews(newPost) {
      newPost.save().then(() => this.transitionTo('petpalsadmin.newsedit'));
    },


  }
});
