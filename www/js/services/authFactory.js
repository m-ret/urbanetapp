angular.module('urbanet.app.services', [])
// create a custom Auth factory to handle $firebaseAuth
.factory("Auth", function ($firebaseAuth, $rootScope) {
  var ref = new Firebase('https://urbanetapp.firebaseio.com/');
  return $firebaseAuth(ref);
});
