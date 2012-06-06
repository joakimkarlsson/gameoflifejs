require(["utils/gameboard"], function(gameboard) {
  
  var position = {x: 0, y: 0};
  setInterval(function() {
    gameboard.clear();
    position.x += 1;
    position.y += 1;
    gameboard.drawCellAt(position);
  }, 100);
});
