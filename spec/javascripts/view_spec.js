require(["view"], function(view) {
  describe("a view with size (100, 100) and board dimensions (10, 10)", function() {
    var board, coordTransformer;

    beforeEach(function() {
      board = {
        forEachCell: function(callback) {
                     }
      };

     context = jasmine.createSpyObj('context', ['fillStyle', 'fillRect']);

     spyOn(board, 'forEachCell').andCallFake(function(drawCell) {
       drawCell({x: 3, y: 5, width: 10, height: 10});
     });

     view.init({canvasWidth: 100, canvasHeight: 100, context: context});
    });

    it("should tell board to call back for each cell when told to render", function() {
      view.renderBoard(board);
      expect(board.forEachCell).toHaveBeenCalled();
    });

    it("should draw a rectangle at position (31, 51) with width and height = (9, 9)", function() {
      view.renderBoard(board);
      expect(context.fillRect).toHaveBeenCalledWith(31, 51, 9, 9);
    });
  });
});
