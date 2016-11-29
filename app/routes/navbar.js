import Ember from 'ember';

export default Ember.Route.extend({
  aboutActive: Ember.computed('router.currentPath', function() {
  let currentPath = this.get('router.currentPath');
  if (
    currentPath === 'PetPals' ||
    currentPath === 'Pet Therapy'
  ) {
    return 'active';
  } else {
    return '';
  }
}),
});
