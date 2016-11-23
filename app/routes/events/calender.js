import Ember from 'ember';

export default Ember.Route.extend({

  model() {
  return Ember.$.getJSON("https://ppalsapi.herokuapp.com/events?password=supersecretadmin");
}

});
