require(["view"], function(view) {
  describe("view", function() {
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

    it("should draw a rectangle at position (30, 50) with width and height = (10, 10)", function() {
      view.renderBoard(board);
      expect(context.fillRect).toHaveBeenCalledWith(30, 50, 10, 10);
    });
  });
});
