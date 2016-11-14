import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  message:'',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {

    saveMessage() {
      this.set('responseMessage', `Thank you! ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
