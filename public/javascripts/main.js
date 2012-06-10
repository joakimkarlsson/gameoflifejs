require(["view", "board", "engine"], function(view, board, engine) {
  
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  view.init({canvasWidth: canvas.width, canvasHeight: canvas.width, 
    context: context});
  board.init({width: 30, height: 20});
  engine.init({view: view, board: board});

  board.setCells([{x: 4, y: 4}]);

  engine.start();
});
