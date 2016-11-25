import Ember from 'ember';
export default Ember.Route.extend({


model() {
  return this.store.createRecord('blog-post');
},

actions: {
  savePost(newPost) {
    newPost.save().then(() => this.transitionTo('events.blog'));
  },

  willTransition() {
    // rollbackAttributes() removes the record from the store
    // if the model 'isNew'
    this.controller.get('model').rollbackAttributes();
  },


  }
});
