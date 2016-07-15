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

    return factory;


  }
)
