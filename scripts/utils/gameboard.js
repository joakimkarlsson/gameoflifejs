define(function() {

  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  var dimensions = {height: 100, width: 100};

  var transformGameCoordsToCanvasCoords = function(gameCoords) {
      var cellWidth = canvas.width / dimensions.width;
      var cellHeight = canvas.height / dimensions.height;
      var left = gameCoords.x * cellWidth;
      var top = gameCoords.y * cellHeight;

      return {left: left, top: top, width: cellWidth, height: cellHeight};
  };

  return {
    clear: function() {
      context.clearRect(0, 0, canvas.width, canvas.height);
    },
    
    setDimensions: function(params) {
      dimensions.width = params.width;
      dimensions.height = params.height;
    },

    drawCellAt: function(coords) {
      var c = transformGameCoordsToCanvasCoords(coords);

      context.fillStyle = "rgb(200, 34, 23)";
      context.fillRect(c.left, c.top, c.width, c.height);
    },

    clearCellAt: function(coords) {
      var c = transformGameCoordsToCanvasCoords(coords);
      context.clearRect(c.left, c.top, c.width, c.height);
    }
  };
});
