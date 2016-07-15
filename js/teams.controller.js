// TeemsController

angular.module('myApp').controller(
  'TeamsController',
  ['TeamFactory', '$location', function(TeamFactory, $location){
    console.log('TeamsController start');

    this.index = () => {
      console.log('team C index');
      TeamFactory.index( (data) => {
        this.teams = data;
      } );

    };




  }]
)
