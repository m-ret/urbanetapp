'use strict';

angular.module('urbanet.app.controllers', [])

.controller("LoginCtrl", function($scope, $rootScope, $ionicPopup, $timeout, $cordovaOauth, $firebaseAuth) {

  var fb = new Firebase("https://urbanetapp.firebaseio.com");

  var auth = $firebaseAuth(fb);

  $scope.loginPopup = function() {

    $scope.data = {}

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      // template: '<button class="ion-social-facebook" type="button" ng-model="data.wifi" ng-click="login()">',
      title: 'Ingresá con Facebook',
      // subTitle: '',
      scope: $scope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>Inicia sesión</b>',
          type: 'button-positive',
          // onTap: function(e) {
          //   if (!$scope.data.wifi) {
          //     //don't allow the user to close unless he enters wifi password
          //     e.preventDefault();
          //   } else {
          //     return $scope.data.wifi;
          //   }
          // }
        }
      ]
    });
    myPopup.then(function(res) {
      console.log('Tapped!', res);
      $scope.login();
      myPopup.close();
    });
    // $timeout(function() {
    //    myPopup.close(); //close the popup after 3 seconds for some reason
    // }, 3000);
  };

  $scope.login = function() {

        $cordovaOauth.facebook("665553936905980", ["email"]).then(function(result) {
            auth.$authWithOAuthToken("facebook", result.access_token).then(function(authData) {
                console.log(JSON.stringify(authData));
            }, function(error) {
                console.error("ERROR: " + error);
            });
        }, function(error) {
            console.log("ERROR: " + error);
        });

    // $cordovaOauth.facebook("665553936905980", ["email"]).then(function(result) {
    //     console.log('ON FB');
    //     console.log(result);
    // }, function(error) {
    //     console.log('OH NO :(');
    //     console.log(error);
    // });

    // console.log('LOGIN');
  };

});
