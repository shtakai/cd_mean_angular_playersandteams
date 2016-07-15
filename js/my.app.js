angular.module('myApp',['ngRoute']);

angular.module('myApp').config(($routeProvider) => {
  $routeProvider
    .when('/players', {
      templateUrl: '../partials/players.html',
      controller: 'PlayersController',
      controllerAs: 'c',
    })
    .when('/teams', {
      templateUrl: '../partials/teams.html',
      controller: 'TeamsController',
      controllerAs: 'c',
    })
    .otherwise({
      redirectTo: '/players',
    });

});

