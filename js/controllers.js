var SoapApp = angular.module('SoapApp', []);

SoapApp.controller('MainCtrl', function ($scope, $http) {
  $http.get('games.json').success(function(data) {
     $scope.games = data;
  });
});
