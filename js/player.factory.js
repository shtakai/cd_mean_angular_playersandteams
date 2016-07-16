// PlayerFactory

angular.module('myApp').factory(
  'PlayerFactory', () => {

    let factory = {};

    let players = [];

    factory.index = (callback) => {
      console.log('F index');
      callback(players);
    }

    factory.add = (name, callback) => {
       console.log('F add');
       let _player = new Player(name);
       players.push(_player);
       callback(players);
    }

    factory.remove = ($index, callback) => {
      console.log('F remove');
      players.splice($index, 1);
      callback(players);
    }

    factory.assignTeam = (_player, _team, callback) => {
      console.log('player F assignTeam');
      _player = _.find(players, (_p) => {
        return _p === _player;
      })
      _player.assignTeam(_team);
      callback(players);
    }

    return factory;


  }
)
