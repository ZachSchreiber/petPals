import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr('string'),
  name: DS.attr('string'),
  bio: DS.attr('string')
});
