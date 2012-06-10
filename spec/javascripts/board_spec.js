require(["board"], function(board) {
  describe("an empty board", function() {
    var drawCell;

    beforeEach(function() {
      drawCell = jasmine.createSpy('drawCell');

      board.init({width: 10, height: 10});
    });

    it("should not have any live cells", function() {
      board.forEachCell(drawCell);
      expect(drawCell).not.toHaveBeenCalled();
    });

    describe("a board with a single cell", function() {
      beforeEach(function() {
        board.setCells([{x: 1, y: 4}]);
      });

      it("should have one cell alive", function() {
        board.forEachCell(drawCell);
        expect(drawCell).toHaveBeenCalledWith({x: 1, y: 4, width: 10, height: 10});
      });
    });
  });
});
