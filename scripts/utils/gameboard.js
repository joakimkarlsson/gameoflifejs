define(function() {

  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  return {
    clear: function() {
      context.fillStyle = "rgb(200, 34, 55)";
      context.fillRect(10, 10, 200, 200);
    }
  };
});
