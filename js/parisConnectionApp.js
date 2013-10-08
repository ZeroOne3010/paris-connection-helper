var app = angular.module('paris-connection-helper', []);

app.controller('MainController', function($scope) {
  $scope.numPlayers = 3;
  $scope.numPlayersChoice = [ 2, 3, 4, 5, 6 ];
  $scope.items = [];
  for ( var i = 0; i <= 30; i++) {
    $scope.items.push({
      key : i,
      value : i
    });
  }
  $scope.playerTotalScore = function(player) {
    var totalScore = 0;
    angular.forEach(player.shares, function(quantity, color) {
      totalScore += quantity * $scope.companyShareValues[color];
    });
    return totalScore;
  };
  emptyValues = {
    red : 0,
    blue : 0,
    black : 0,
    brown : 0,
    yellow : 0,
    purple : 0
  };
  $scope.companyShareValues = jQuery.extend({}, emptyValues);
  $scope.players = [ {
    name : 'Player1',
    shares : jQuery.extend({}, emptyValues)
  }, {
    name : 'Player2',
    shares : jQuery.extend({}, emptyValues)
  }, {
    name : 'Player3',
    shares : jQuery.extend({}, emptyValues)
  }, {
    name : 'Player4',
    shares : jQuery.extend({}, emptyValues)
  }, {
    name : 'Player5',
    shares : jQuery.extend({}, emptyValues)
  }, {
    name : 'Player6',
    shares : jQuery.extend({}, emptyValues)
  } ];

  $scope.colors = [ 'red', 'blue', 'black', 'brown', 'yellow', 'purple', ];
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