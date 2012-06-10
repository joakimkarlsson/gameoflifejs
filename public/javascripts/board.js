define(function() {
  var dimensions_;

  return {
    setDimensions: function(dim) {
      dimensions_ = dim;
    },

    liveCells: function() {
      var x = Math.floor(Math.random() * dimensions_.width);
      var y = Math.floor(Math.random() * dimensions_.height);
      return [{x: x, y: y}];
    }
  };
});
