import Ember from 'ember';

export default Ember.Controller.extend({
  headerMessage: 'Coming Soon',
  responseMessage: '',
  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {

    saveInvitation() {

      var self = this;
      var email = this.get('emailAddress');

      var newInvitation = this.store.createRecord('invitation', {
                 email: email
             });

      newInvitation.save().then(function(response) {
        self.set('responseMessage', "Thank you!  " + response.get('emailAddress'));
        self.set('emailAddress', '');
             });
    }

    getDate () {
      
    }
  }

});
