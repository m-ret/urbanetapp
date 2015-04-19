'use strict';

angular.module('urbanet.app.controllers', [])

.controller("LoginCtrl", function($scope, $rootScope, $ionicPopup, $timeout, $cordovaOauth) {

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
        console.log('ON FB');
    }, function(error) {
        console.log('OH NO :(');
    });

    console.log('LOGIN');
  };

});
