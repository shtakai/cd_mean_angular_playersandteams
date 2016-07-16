// AssociationsController

angular.module('myApp').controller('AssociationsController',
  ['PlayerFactory', 'TeamFactory', '$location',
    function(PlayerFactory, TeamFactory, $location){
      console.log('AssociationsController start');

      this.index = () => {
        console.log('assoc C index');
        PlayerFactory.index( (data) => {
           this.players = data;
        } );
        TeamFactory.index( (data) => {
           this.teams = data;
        } );
      };

      this.assignTeam = (player, team) => {
        console.log('assoc C assignTeam');

        // NOTE: no guaranty for existing team/player when invoked
        PlayerFactory.assignTeam(player, team, (data) => {
          this.players = data;
        });
      }

      this.clearAssignment = (player) => {
        console.log('player C clearAssignment');
        PlayerFactory.assignTeam(player, null, (data) => {
           this.players = data;
        });
      };

    }]);
