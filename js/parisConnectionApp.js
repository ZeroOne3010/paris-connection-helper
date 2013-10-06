var app = angular.module('paris-connection-helper', []);

app.controller('MainController', function($scope) {
  $scope.items = [];
  for ( var i = 0; i <= 30; i++) {
    $scope.items.push({key: i, value: i});
  }
  $scope.playerTotalScore = function(player) {
    var totalScore = 0;
    angular.forEach(player.shares, function(quantity,color){
      totalScore += quantity * $scope.companyShareValues[color];
    });
    return totalScore;
  };
  $scope.companyShareValues = {};
  $scope.players = [ {
    name : 'Player1',
    shares : {}
  }, {
    name : 'Player2',
    shares : {}
  }, {
    name : 'Player3',
    shares : {}
  } ];
  
  $scope.colors = [ {
    name : 'red',
    color : '#ff0000'
  }, {
    name : 'green',
    color : '#00ff00'
  }, {
    name : 'blue',
    color : '#0000ff'
  }/*, {
    name : 'black',
    color : '#000000'
  }, {
    name : 'brown',
    color : '#000000'
  }, {
    name : 'yellow',
    color : '#000000'
  }, {
    name : 'purple',
    color : '#000000'
  } */];
});

$(function() {
  $('.scroller').mobiscroll().select({
    theme : 'default',
    display : 'inline',
    mode : 'mixed',
    inputClass : 'scroller-input',
    width : 40,
  });
});