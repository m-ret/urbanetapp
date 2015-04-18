// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic',
                           'firebase',
                           'starter.controllers',
                           'starter.services'])

// do all the things ionic needs to get going
.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    // .state('login', {
    //   url: '/login',
    //   templateUrl: 'templates/login.html',
    //   controller: 'LoginCtrl'
    // })

    .state('tabs', {
      url: "/tabs",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    .state('tabs.news', {
        url: '/news',
        views: {
          'tab-news': {
            templateUrl: 'templates/tab-news.html',
            controller: 'ChatsCtrl'
          }
        }
      })

    .state('tabs.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })

    .state('tabs.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/tabs/news');

})

// change this URL to your Firebase
// .constant('FBURL', 'https://urbanetapp.firebaseio.com')

// constructor injection for a Firebase reference
// .service('Root', ['FBURL', Firebase])

