// TeemsController

angular.module('myApp').controller(
  'TeamsController', function(TeamFactory, $location, $routeParams){
    console.log('TeamsController start');
    console.log('routeparams', $routeParams);
    console.log('location', $location);

    this.index = () => {
      console.log('team C index');
      TeamFactory.index( (data) => {
        this.teams = data;
      } );
    };

    this.add = () => {
      console.log('team C add');
      TeamFactory.add( this.teamName, (data) => {
        this.teams = data;
      });
    };

    this.remove = ($index) => {
      console.log('team C remove');
      TeamFactory.remove( $index, (data) => {
        this.teams = data;
      });
    };

  }
)
