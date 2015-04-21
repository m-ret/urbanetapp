// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('urbanet.app', ['ionic',
                               'firebase',
                               'urbanet.app.controllers',
                               'urbanet.app.services'])

// do all the things ionic needs to get going
.run(function($ionicPlatform) {
  var ref = new Firebase("https://urbanetapp.firebaseio.com");
    $ionicPlatform.ready(function() {
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
    })

    .state('tabs.sign-signup', {
      url: '/signup',
      views: {
        'signup': {
          templateUrl: 'templates/tab-signup.html',
          controller: 'LoginCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/tabs/news');

});
