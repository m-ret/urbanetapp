'use strict';

angular.module('starter.controllers')

.controller('ChatsCtrl', function($scope, NewsFactory) {
  $scope.stories = NewsFactory.all();
  // $scope.remove = function(chat) {
  //   Chats.remove(chat);
  // }
});
