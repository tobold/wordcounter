describe("PrimeCalculator", function() {
  beforeEach(function() {
    primeCalculator = new PrimeCalculator();
  });

  describe("#calculate", function(){
    it("returns 'yes' if the number is a prime", function(){
      var prime = 7;
      expect(primeCalculator.calculate(prime)).toEqual('yes');
    });
  });
});
