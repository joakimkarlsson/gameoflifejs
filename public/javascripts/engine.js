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
        view.renderBoard(board);
      }, 500);
    }
  };
});
