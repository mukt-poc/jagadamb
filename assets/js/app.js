angular.module('Jagadamb', [
  'Jagadamb.services',
  'Jagadamb.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/home", {templateUrl: "home.html", controller: "mainController"}).
  
	otherwise({redirectTo: '/home'});
}]);