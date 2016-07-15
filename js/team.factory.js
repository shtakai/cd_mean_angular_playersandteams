// TeamFactory

angular.module('myApp').factory('TeamFactory', function(){
  let factory = {};
  let _teams = [];

  factory.index = (callback) => {
    console.log('team F index');
    callback(_teams);
  }






  return factory;
})
