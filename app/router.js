import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('gallery');
  this.route('blog');
  this.route('petpalsadmin' , function() {
    this.route('new');
    this.route('edit', { path: '/:post_id/edit' });
});
});

export default Router;
