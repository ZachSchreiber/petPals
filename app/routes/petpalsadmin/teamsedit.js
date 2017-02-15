import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('teams');
  },

  actions: {

          deleteTeam(team) {
            let confirmation = confirm('Are you sure?');

            if (confirmation) {
              team.destroyRecord();
            }
          }
        }

});
