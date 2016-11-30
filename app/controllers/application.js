import Ember from 'ember';

export default Ember.Controller.extend({

  init: function() {
    $(function() {
      var date = new Date();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var year = date.getFullYear();

      var monthDate = month + day + year;
      $(".blog-date").val(month + "/" + day + "/" + year).trigger("change");

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
