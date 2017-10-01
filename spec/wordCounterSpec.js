describe("WordCounter", function() {
  beforeEach(function() {
    wordCounter = new WordCounter();
  });

  describe("#count", function(){
    it("counts the individual words in an array", function(){
      var wordArray = ['foo', 'foo', 'bar'];
      expect(wordCounter.getWordsHash()).toEqual({});
      wordCounter.count(wordArray);
      expect(wordCounter.getWordsHash()).toEqual({ 'foo' : 2, 'bar' : 1});
    });
  });
});
