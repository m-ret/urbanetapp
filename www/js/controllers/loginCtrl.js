'use strict';

angular.module('starter.controllers', [])

.controller("LoginCtrl", function($scope, $state, Auth) {

  var ref = new Firebase("https://urbanetapp.firebaseio.com");

  $scope.user = null;

  $scope.login = function scopeLogin() {

    ref.authWithOAuthRedirect("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        $state.transitionTo('tabs.news');
        console.log("Authenticated successfully with payload:", angular.toJson(authData, 'pretty'));
      }
    });
  };

  $scope.logout = Auth.logout;

  Auth.onAuth(function(authData) {
    $scope.user = authData;
  });
});
