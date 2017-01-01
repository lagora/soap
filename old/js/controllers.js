var SoapApp = angular.module('SoapApp', []);

SoapApp.controller('MainCtrl', function ($scope, $http, $location) {
  $http.get('games.json').success(function(data) {
     $scope.games = data;
  });
});
