import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
       pressed: function() {

            this.$(".content-body").slideDown("slow");

     }
   },
});
