angular.module('myApp',['ngRoute', 'ngMessages']);

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
    .when('/associations', {
      templateUrl: '../partials/associations.html',
      controller: 'AssociationsController',
      controllerAs: 'c',
    })
    .when('/:teamname', {
      templateUrl: '../partials/team.html',
      controller: 'TeamsController',
      controllerAs: 'c',
    })
    .otherwise({
      redirectTo: '/players',
    });

});

