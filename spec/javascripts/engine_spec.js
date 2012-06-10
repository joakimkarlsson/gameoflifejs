require(["engine"], function(engine) {

  describe("a game engine", function() {
    var view, board, fakeSetInterval, fakeClearInterval, intervalActive;

    beforeEach(function() {
      view = jasmine.createSpyObj('view', ['clear', 'drawCells']);
      board = jasmine.createSpyObj('board', ['update']);

      jasmine.Clock.useMock();

      engine.init({view: view, board: board});

      engine.start();
      jasmine.Clock.tick(500);
    });

    it("should be loaded", function() {
      expect(engine).not.toEqual(null);
    });

    it("should clear the view when started", function() {
      expect(view.clear).toHaveBeenCalled();
    });

    it("should update the board", function() {
      expect(board.update).toHaveBeenCalled();
    });

  });

});

