define(function() {
  var view, 
      board;

  return {
    init: function(params) {
      view = params.view;
      board = params.board;
    },

    start: function() {
      setInterval(function() {
        view.clear();
        board.update();

//        board.liveCells().forEach(function(cell) {
//          view.drawCellAt({x: cell.x, y: cell.y, color: "#32546b"});
//        });
      }, 500);
    }
  };
});
