// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module("starter", ["ionic", "firebase"])

// do all the things ionic needs to get going
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })

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



  $urlRouterProvider.otherwise('/login');

})

// change this URL to your Firebase
.constant('FBURL', 'https://urbanetapp.firebaseio.com')

// constructor injection for a Firebase reference
.service('Root', ['FBURL', Firebase])

// create a custom Auth factory to handle $firebaseAuth
.factory('Auth', function($firebaseAuth, Root, $timeout){
  var auth = $firebaseAuth(Root);
  return {
    // helper method to login with multiple providers
    loginWithProvider: function loginWithProvider(provider) {
      return auth.$authWithOAuthPopup(provider);
    },
    // convenience method for logging in with Facebook
    loginWithFacebook: function login() {
      return this.loginWithProvider("facebook");
    },
    // wrapping the unauth function
    logout: function logout() {
      auth.$unauth();
    },
    // wrap the $onAuth function with $timeout so it processes
    // in the digest loop.
    onAuth: function onLoggedIn(callback) {
      auth.$onAuth(function(authData) {
        $timeout(function() {
          callback(authData);
        });
      });
    }
  };
})

.controller("LoginCtrl", function($scope, $state, Auth) {
  // Initially set no user to be logged in
  $scope.user = null;

  // Logs a user in with Facebook
  // Calls $authWithOAuthPopup on $firebaseAuth
  // This will be processed by the InAppBrowser plugin on mobile
  // We can add the user to $scope here or in the $onAuth fn
  $scope.login = function scopeLogin() {
    Auth.loginWithFacebook()
    .then(function(authData){
      $state.transitionTo('tabs.news');
      console.log('We are logged in!', authData);
    })
    .catch(function(error) {
      console.error(error);
    });
  };

  // Logs a user out
  $scope.logout = Auth.logout;

  // detect changes in authentication state
  // when a user logs in, set them to $scope
  Auth.onAuth(function(authData) {
    $scope.user = authData;
  });
})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, NewsFactory) {
  $scope.stories = NewsFactory.all();
  // $scope.remove = function(chat) {
  //   Chats.remove(chat);
  // }
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.factory('NewsFactory', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var news = [{
    id: 0,
    newsTitle: '¡Skrillex en Costa Rica!',
    newsContent: 'Un hábil lector del público, Skrillex, compartió ingeniosas combinaciones que mantuvieron a sus fanáticos de puntillas, gritando y saltando sin parar. Concluido el espectáculo a las 8 p. m., los productores del evento informaron de que el cierre del festival, a cargo de Moby, se trasladaría para la tarima oeste. Originalmente se había programado para la tarima del bosque, donde el espacio es más limitado.',
    eventBanner: '../img/skrillex-banner.jpg',
    eventDate: '12 Abril, 2015'
  }, {
    id: 1,
    newsTitle: 'Fiesta en la playa',
    newsContent: 'Al ritmo de deephouse Corona impulsa una campaña en la cual su objetivo principal es la concientización del cuidado de las playas mexicanas, Movimiento Playa Corona es un proyecto para la concientización de la conservación de dichas playas.',
    eventBanner: '../img/beach-party.jpg',
    eventDate: '7 Abril, 2015'
  }, {
    id: 2,
    newsTitle: 'Música en vivo',
    newsContent: '¡Dése el gusto! Este sábado, de 11 AM a 6 PM, una parrillada con choripán, el famoso sándwich de las parrilladas argentinas, lo espera en el Centro Gastronómico Sabores. El lugar tendrá sus puertas abiertas a todo público. ¡Venga y conozca sus instalaciones y los cursos que se imparten! Se ubica en Escazú.',
    eventBanner: '../img/live-music.jpg',
    eventDate: '15 Marzo, 2015'
  }, {
    id: 3,
    newsTitle: 'Inauguración de nueva disco',
    newsContent: 'Las obras de la nueva discoteca Boom Boom Room han finalizado y desde GranadaMarcha.com os traemos en exclusiva las primeras imágenes de la discoteca. Granada ha cambiado y uno de sus clubes más emblemáticos también… Si conocisteis Granada 10 no conocéis Boom Boom Room.',
    eventBanner: '../img/disco.jpg',
    eventDate: '5 Febrero, 2015'
  }];

  return {
    all: function() {
      return news;
    },
    // remove: function(notice) {
    //   chats.splice(chats.indexOf(chat), 1);
    // },
    get: function(newsId) {
      for (var i = 0; i < stories.length; i++) {
        if (stories[i].id === parseInt(noticeId)) {
          return stories[i];
        }
      }
      return null;
    }
  };
});


