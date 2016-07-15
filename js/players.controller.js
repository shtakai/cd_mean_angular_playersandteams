// PlayersController

angular.module('myApp').controller(
  'PlayersController',
  [
    'PlayerFactory', '$location',
    function( PlayerFactory, $location ){
      console.log('PlayersController start');
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
  ]
)
