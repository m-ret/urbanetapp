'use strict';

angular.module('urbanet.app.controllers')

.controller('NewsCtrl', function($scope, $ionicLoading, $rootScope, $timeout, NewsFactory) {

	$scope.doRefresh = function() {
	  $ionicLoading.show({
	    template: 'Cargando noticias...<br>'+
	    					'<ion-spinner class="spinner-assertive"'+
	    					'icon="android"></ion-spinner>',
	    duration: 1000
	  });
	  $scope.stories = NewsFactory.all();
    $scope.$broadcast('scroll.refreshComplete');
  };
  $scope.doRefresh();
})

.controller('PromosCtrl', function($scope, $ionicLoading, $timeout, PromoFactory) {
	$scope.doRefresh = function() {
	  $ionicLoading.show({
	    template: 'Cargando promociones...<br>'+
	    					'<ion-spinner class="spinner-assertive"'+
	    					'icon="android"></ion-spinner>',
	    duration: 1000
	  });  	  
	  $scope.promotions = PromoFactory.all();	   
    $scope.$broadcast('scroll.refreshComplete');
  };
  $scope.doRefresh();	
});
// $scope.remove = function(chat) {
//   Chats.remove(chat);
// }
