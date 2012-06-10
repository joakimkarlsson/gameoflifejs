require(["gameboard_view"], function(gameboard) {
  describe("a game board", function() {
    it("should be loaded", function() {
      expect(gameboard).not.toEqual(null);
    });
  });
});
