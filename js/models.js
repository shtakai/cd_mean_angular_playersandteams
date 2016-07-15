function Player(name){
  this.name = name || chance.name();
}

function Team(name){
  let _players = [];
  this.name = name || (chance.city() + ' ' + chance.domain({tld:'com'}));

  this.addPlayer = (player) => {
    if(typeof(player) === 'Player'){
      _players.push(player);
    }
  };

  this.removePlayer = (player) => {
    if(typeof(player) === 'player'){
      _.remove(_players, (_player) => {
        return _player == player;
      });
    }
  };

  this.getPlaters = () => _players;


}
