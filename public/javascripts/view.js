define(function() {
  var context_, canvasWidth_, canvasHeight_;

  var transformGameCoordsToCanvasCoords = function(gameCoords) {
    var cellWidth = Math.floor(canvasWidth_ / gameCoords.width);
    var cellHeight = Math.floor(canvasHeight_ / gameCoords.height);
    var left = gameCoords.x * cellWidth;
    var top = gameCoords.y * cellHeight;

    return {left: left, top: top, width: cellWidth, height: cellHeight};
  };

  var drawCellAt = function(params) {
    var c = transformGameCoordsToCanvasCoords(params);

    context_.fillStyle = params.color || "#FF0000";
    context_.fillRect(c.left, c.top, c.width, c.height);
  };


      return {
        init: function(params) {
                canvasWidth_ = params.canvasWidth;
                canvasHeight_ = params.canvasHeight;
                context_ = params.context;  //canvas.getContext("2d");
              },
        clear: function() {
                 context_.clearRect(0, 0, canvasWidth_, canvasHeight_);
               },

        renderBoard: function(board) {
                       board.forEachCell(drawCellAt);
                     }
      };
});
