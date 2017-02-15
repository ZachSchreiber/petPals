import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('string'),
  link: DS.attr('string'),
  title: DS.attr('string'),
  summary: DS.attr('string')
});
