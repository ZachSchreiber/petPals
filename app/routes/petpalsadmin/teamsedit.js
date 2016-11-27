import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('teams');
  },

  actions: {

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    },

          deleteTeam(team) {
            let confirmation = confirm('Are you sure?');

            if (confirmation) {
              team.destroyRecord().then(() => this.transitionTo('teams'));
            }
          }
        }

});
