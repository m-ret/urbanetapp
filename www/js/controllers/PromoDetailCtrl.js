'use strict';

angular.module('urbanet.app.controllers')

.controller('PromoDetailCtrl', function($scope, $stateParams, PromoFactory) {
  $scope.promos = PromoFactory.get($stateParams.promotionsId);  
});