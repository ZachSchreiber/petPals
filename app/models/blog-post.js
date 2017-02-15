import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr('string'),
  title: DS.attr('string'),
  body: DS.attr('string'),
  date: DS.attr('string'),
  video: DS.attr('string'),
  news: DS.attr('string')
});
