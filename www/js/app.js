// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('urbanet.app', ['ionic',
                               'ngCordova',                   
                               'urbanet.app.controllers',
                               'urbanet.app.services'])

// do all the things ionic needs to get going
.run(function($ionicPlatform, $cordovaOauth) {
  $cordovaOauth.facebook("665553936905980", ["email", "read_stream", "user_website", "user_location", "user_relationships"]);
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
            controller: 'NewsCtrl'
          }
        }
      })

    .state('tabs.promotions', {
      url: '/promotions',
      views: {
        'tab-promotions': {
          templateUrl: 'templates/tab-promotions.html',
          controller: 'PromosCtrl'
        }
      }
    })

    .state('tabs.promo-detail', {
      url: '/promotions/:promotionsId',
      views: {
        'tab-promotions': {
          templateUrl: 'templates/tab-promo-detail.html',
          controller: 'PromoDetailCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/tabs/news');

});
