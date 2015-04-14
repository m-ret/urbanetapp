'use strict';

angular.module('starter.controllers', [])

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
});
