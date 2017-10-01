describe("Splitifyer", function() {
  beforeEach(function() {
    splitifyer = new Splitifyer();
  });

  describe("#split", function(){
    it("splits a string into an array", function(){
      var string = 'this is a string';
      expect(splitifyer.split(string)).toEqual(['this', 'is', 'a', 'string']);
    });
    it("splits the string where it sees punctuation", function(){
      var string = 'this? is. a! string:';
      expect(splitifyer.split(string)).toEqual(['this', 'is', 'a', 'string']);
    });
    it("splits doesn't create empty strings in the array", function(){
      var string = 'this????       ! is. ":] a!?><, string:   ?';
      expect(splitifyer.split(string)).toEqual(['this', 'is', 'a', 'string']);
    });
  });
});
