angular.module('myApp',['ngRoute']);

angular.module('myApp').config(($routeProvider) => {
  $routeProvider
    .when('/players', {
      templateUrl: '../partials/players.html',
      controller: 'PlayersController',
      controllerAs: 'c',
    })
    .otherwise({
      redirectTo: '/players',
    });

});

