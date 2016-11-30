import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('schools');
  },

  actions: {

  
          deleteSchool(post) {
            let confirmation = confirm('Are you sure?');

            if (confirmation) {
              post.destroyRecord();
            }
          }
        }







});
