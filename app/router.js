import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about', function() {
    this.route('pals');
    this.route('pettherapy');
    this.route('testimonials');
  });
  this.route('contact');
  this.route('teams');
  this.route('events', function() {
    this.route('calendar');
    this.route('blog');

  });
  this.route('petpalsadmin' , function() {
    this.route('schools');
    this.route('teams', /*{ path: '/:post_id/edit' }*/);
    this.route('indexedit');
    this.route('schoolsedit');
    this.route('teamsedit');
});
  this.route('join', function() {
    this.route('volunteer');
    this.route('resources');
    this.route('schools');
  });
});

export default Router;
