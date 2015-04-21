'use strict';

angular.module('urbanet.app.controllers', [])

.controller("LoginCtrl", function($scope, $rootScope, $ionicLoading, $ionicModal,
                                  $timeout, $firebaseAuth, $state) {

  var ref = new Firebase('https://urbanetapp.firebaseio.com/'),
      auth = $firebaseAuth(ref);

  $ionicModal.fromTemplateUrl('templates/modal-login.html', function($ionicModal) {
    $scope.modal = $ionicModal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.createUser = function(user) {
    console.log(user);
    console.log("Create User Function called");
    if (user && user.email && user.password && user.name) {
      $ionicLoading.show({
        template: 'Signing Up...'
      });
      auth.$createUser({
        email: user.email,
        password: user.password
      }).then(function (userData) {
        alert("User created successfully!");
        ref.child("users").child(userData.uid).set({
          email: user.email,
          displayName: user.name
        });
        $ionicLoading.hide();
      }).catch(function (error) {
        alert("Error: " + error);
        $ionicLoading.hide();
      });
    } else
    console.log("Please fill all details");
  };

  $scope.signIn = function (user) {
    if (user && user.email && user.pwdForLogin) {
      $ionicLoading.show({
        template: 'Signing In...'
      });
      auth.$authWithPassword({
        email: user.email,
        password: user.pwdForLogin
      }).then(function (authData) {
        console.log("Logged in as:" + authData.uid);
        ref.child("users").child(authData.uid).once('value', function (snapshot) {
          var val = snapshot.val();
          $scope.$apply(function () {
            $rootScope.displayName = val;
          });
        });
        $scope.userLogin = true;
        $ionicLoading.hide();
        $scope.closeModal();
      }).catch(function (error) {
        alert("Authentication failed:" + error.message);
        $ionicLoading.hide();
      });
    } else
    console.log("Please enter email and password both");
  };
});
