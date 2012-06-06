define(function() {

  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  var dimensions = {height: 100, width: 100};

  var transformGameCoordsToCanvasCoords = function(gameCoords) {
      var cellWidth = Math.floor(canvas.width / dimensions.width);
      var cellHeight = Math.floor(canvas.height / dimensions.height);
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

      console.log("drawing");
      console.debug(c);

      context.fillStyle = "#FF0000";
      context.fillRect(c.left, c.top, c.width-1, c.height-1);
    },

    clearCellAt: function(coords) {
      var c = transformGameCoordsToCanvasCoords(coords);

      console.log("clearing");
      console.debug(c);

      context.clearRect(c.left, c.top, c.width, c.height);
    }
  };
});
