require(["gameboard"], function(gameboard) {
  
  var canvas = document.getElementById("canvas");
  gameboard.init(canvas);

  
  gameboard.setDimensions({width: 30, height: 20});
  gameboard.clear();

  var position = {x: 2, y: 5};
  var dx = 1, dy = 1;

  setInterval(function() {

    gameboard.clearCellAt(position);

    position.x = position.x + dx;
    position.y = position.y + dy;

    if(position.x === 30 || position.x === 0) {
      dx = dx * -1;
    }

    if(position.y === 20 || position.y === 0) {
      dy = dy * -1;
    }

    gameboard.drawCellAt(position);
  }, 50);
});
