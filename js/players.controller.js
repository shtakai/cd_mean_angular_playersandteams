// PlayersController

angular.module('myApp').controller(
  'PlayersController',
    function( PlayerFactory, $location, $routeParams ){
      console.log('PlayersController start');
      console.log('routeParams', $routeParams)
      console.log('location', $location);

      this.index = () => {
        console.log('index');
        PlayerFactory.index((data) => {
          this.players = data
        });
      };

      this.add = () => {
        PlayerFactory.add(this.playerName, (data) => {
          this.players = data;
        });
      };

      this.remove = ($index) => {
        PlayerFactory.remove($index, (data) => {
          this.players = data;
        });
      };
    }
)
