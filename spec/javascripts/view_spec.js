require(["view"], function(view) {
  describe("view", function() {
    var board;

    beforeEach(function() {
     board = jasmine.createSpyObj('board', ['forEachCell']);
    });

    it("should tell board to call back for each cell when told to render", function() {
      view.renderBoard(board);
      expect(board.forEachCell).toHaveBeenCalled();
    });
  });
});
