/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'pet-pals',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: 'https://pet-pals.firebaseio.com/',
    firebase: {
      apiKey: "AIzaSyD6FPLAZ6bw1rAUudv5DoQ2AFXJUeq7aWc",
      authDomain: "pet-pals.firebaseapp.com",
      databaseURL: "https://pet-pals.firebaseio.com",
      storageBucket: "gs://pet-pals.appspot.com",
      messagingSenderId: "988694555434",
    },
    torii: {
      sessionServiceName: 'session',
    },

    EmberENV: {
      FEATURES: {

        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {

    }
  };


  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {


  }

  return ENV;
};
