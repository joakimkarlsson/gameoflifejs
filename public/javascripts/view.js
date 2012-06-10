define(function() {
  var context_, canvas_;

  var dimensions_ = {height: 100, width: 100};

  var transformGameCoordsToCanvasCoords = function(gameCoords) {
    var cellWidth = Math.floor(canvas.width / dimensions_.width);
    var cellHeight = Math.floor(canvas.height / dimensions_.height);
    var left = gameCoords.x * cellWidth;
    var top = gameCoords.y * cellHeight;

    return {left: left, top: top, width: cellWidth, height: cellHeight};
  };

  var drawCellAt = function(params) {
    var c = transformGameCoordsToCanvasCoords({x: params.x, y: params.y});

    context_.fillStyle = params.color || "#FF0000";
    context_.fillRect(c.left, c.top, c.width, c.height);
  };


      return {
        init: function(canvas) {
                canvas_ = canvas;
                context_ = canvas.getContext("2d");
              },
        clear: function() {
                 context_.clearRect(0, 0, canvas_.width, canvas_.height);
               },

        setDimensions: function(params) {
                         dimensions_.width = params.width;
                         dimensions_.height = params.height;
                       },

        renderBoard: function(board) {
                       board.forEachCell(drawCellAt);
                     }
      };
});
