import Ember from 'ember';

export default Ember.Controller.extend({

  hooplah: {
    isAuthenticated: false,
    currentUser: null
  },
  auth: true,


  init: function() {
    $(function() {

      var mainNavBar = $('#main-navbar');

      $('.subMenu').on('click', function () {
        $('.navbar-toggle').addClass('collapsed');
        mainNavBar.removeClass('in');
      });

      $('.mobileClose').on('click', function () {
        $('.navbar-toggle').addClass('collapsed');
        mainNavBar.removeClass('in');
      });

      $('.content-full').on('click', function () {
        $('.navbar-toggle').addClass('collapsed');
        mainNavBar.removeClass('in');
      });
    });
  }
});
