import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('schools');
  },

  actions: {

    // willTransition() {
    //   // rollbackAttributes() removes the record from the store
    //   // if the model 'isNew'
    //   this.controller.get('model').rollbackAttributes();
    // },
          deleteSchool(post) {
            let confirmation = confirm('Are you sure?');

            if (confirmation) {
              post.destroyRecord();
            }
          }
        }







});
