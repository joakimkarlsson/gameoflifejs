require(["view", "board", "engine"], function(view, board, engine) {
  
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  view.init({canvasWidth: canvas.width, canvasHeight: canvas.height, 
    context: context});
  board.init({width: 30, height: 20});
  engine.init({view: view, board: board});

  var fPentomino = [
    {x: 5, y: 5},
    {x: 6, y: 5},
    {x: 4, y: 6},
    {x: 5, y: 6},
    {x: 5, y: 7},
  ];

  board.setCells(fPentomino);

  engine.start();
});
