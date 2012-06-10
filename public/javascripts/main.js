require(["gameboard_view"], function(gameboard) {
  
  var canvas = document.getElementById("canvas");
  gameboard.init(canvas);

  
  gameboard.setDimensions({width: 30, height: 20});
  gameboard.clear();


  gameboard.drawCellAt({x: 2, y: 15, color: "#32546b"});
  gameboard.clearCellAt({x: 3, y: 23});

});
