define(function() {
  var dimensions_, liveCells_;

  return {
    init: function(params) {
            dimensions_ = {
              width: params.width,
              height: params.height
            };

            liveCells_ = [];
    },

    update: function() {
            },

    setCells: function(cells) {
                liveCells_ = cells;
              },

    forEachCell: function(callback) {
                   liveCells_.forEach(function(cell) {
                     callback({x: cell.x, y: cell.y, width: dimensions_.width, height: dimensions_.height});
                   });
                 }
  };
});
