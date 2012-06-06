require(["utils/gameboard"], function(gameboard) {
  
  var position = {x: 12, y: 15};
  gameboard.setDimensions({width: 30, height: 20});
  gameboard.clear();

  setInterval(function() {

    position.x = Math.round(Math.random() * 30);
    position.y = Math.round(Math.random() * 20);

    gameboard.drawCellAt(position);
  }, 20);
});
