describe("Splitter", function() {
  beforeEach(function() {
    splitter = new Splitter();
  });

  describe("#split", function(){
    it("splits a string into an array", function(){
      var string = 'this is a string';
      expect(splitter.split(string)).toEqual(['this', 'is', 'a', 'string']);
    });
    it("splits the string where it sees punctuation", function(){
      var string = 'this? is. a! string:';
      expect(splitter.split(string)).toEqual(['this', 'is', 'a', 'string']);
    });
    it("splits doesn't create empty strings in the array", function(){
      var string = 'this????       ! is. ":] a!?><, string:   ?';
      expect(splitter.split(string)).toEqual(['this', 'is', 'a', 'string']);
    });
  });
});
