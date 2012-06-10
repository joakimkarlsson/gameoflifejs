require(["view", "board", "engine"], function(view, board, engine) {
  
  var canvas = document.getElementById("canvas");
  view.init(canvas);

  board.setDimensions({width: 30, height: 20});
  view.setDimensions({width: 30, height: 20});

  engine.init({view: view, board: board});
  engine.start();

  
  //view.clearCellAt({x: 3, y: 23});

});
