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

    drawCellAt: function(coords) {
      var c = transformGameCoordsToCanvasCoords(coords);

      context_.fillStyle = "#FF0000";
      context_.fillRect(c.left+1, c.top+1, c.width-2, c.height-2);
    },

    clearCellAt: function(coords) {
      var c = transformGameCoordsToCanvasCoords(coords);

      context_.clearRect(c.left, c.top, c.width, c.height);
    }
  };
});
