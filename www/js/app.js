// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'timer' is the name of this angular module (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('timer', ['ionic', 'timer.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })
    .state('app.timers', {
      url: "/timers",
      views: {
        'menuContent': {
          templateUrl: "templates/timers.html",
          controller: 'TimersCtrl'
        }
      }
    })

  .state('app.timer', {
    url: "/timers/:timerId",
    views: {
      'menuContent': {
        templateUrl: "templates/timer.html",
        controller: 'TimerCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/timers');
});
