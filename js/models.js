// NOTE: Player can track team but reverce way can not.

function Player(name){
  this.name = name || chance.name();
  let _team = null;
  this.assignTeam = (team) => {
    if(team instanceof Team || team == null) {
      _team = team;
    }
  };
  this.getTeam = () => _team;
}

function Team(name){
  this.name = name || (chance.city() + ' ' + chance.domain({tld:'com'}));
}
