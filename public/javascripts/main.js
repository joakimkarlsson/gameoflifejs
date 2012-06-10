require(["gameboard_view", "gameboard", "game_engine"], function(view, gameboard, engine) {
  
  var canvas = document.getElementById("canvas");
  view.init(canvas);

  gameboard.setDimensions({width: 30, height: 20});
  view.setDimensions({width: 30, height: 20});

  engine.init({view: view, board: gameboard});
  engine.start();

  
  //view.clearCellAt({x: 3, y: 23});

});
