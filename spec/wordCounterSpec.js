describe("WordCounter", function() {
  beforeEach(function() {
    wordCounter = new WordCounter();
  });

  describe("#count", function(){
    it("counts the individual words in an array", function(){
      var wordArray = ['foo', 'foo', 'bar'];
      expect(wordCounter.count(wordArray)).toEqual({ 'foo' : 2, 'bar' : 1});
    });
  });
});
