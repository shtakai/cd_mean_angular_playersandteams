// TeamFactory

angular.module('myApp').factory('TeamFactory', function(){
  let factory = {};
  let _teams = [];

  factory.index = (callback) => {
    console.log('team F index');
    callback(_teams);
  }

  factory.add = (name, callback) => {
    console.log('team F add');
    let _team = new Team(name);
    _teams.push(_team);
    callback(_teams);
  }

  factory.remove = ($index, callback) => {
    console.log('team F remove');
    _teams.splice($index, 1);
    callback(_teams);
  }
  return factory;
})
