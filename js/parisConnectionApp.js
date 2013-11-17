var app = angular.module('paris-connection-helper', []);

app.controller('MainController', function($scope) {
  $scope.numPlayers = 3;
  $scope.allowedLocomotivesByNumberOfPlayers = {
    2 : 20,
    3 : 20,
    4 : 15,
    5 : 12,
    6 : 10
  };
  $scope.nameEditorVisible = [];
  $scope.hideNameEditors = function() {
    for ( var i = 0; i < 6; i++) {
      $scope.nameEditorVisible[i] = false;
    }
  };
  $scope.showNameEditor = function(event, index) {
    event.stopPropagation();
    $scope.hideNameEditors();
    $scope.nameEditorVisible[index] = true;
  };
  $scope.hideNameEditors();
  $scope.items = [];
  for ( var i = 0; i <= 30; i++) {
    $scope.items.push({
      key : i,
      value : i
    });
  }
  $scope.playerTotalScore = function(player) {
    var totalScore = 0;
    var totalShares = 0;
    angular.forEach(player.shares, function(quantity, color) {
      totalShares += quantity;
      totalScore += quantity * $scope.companyShareValues[color];
    });
    var maxLocomotives = $scope.allowedLocomotivesByNumberOfPlayers[$scope.numPlayers];
    if (totalShares > maxLocomotives) {
      totalScore -= 20 * (totalShares - maxLocomotives);
    }
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
    width : 55,
  });
});