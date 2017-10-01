describe("PrimeCalculator", function() {
  beforeEach(function() {
    primeCalculator = new PrimeCalculator();
  });

  describe("#calculate", function(){
    it("returns 'yes' if the number is a prime", function(){
      var prime = 7;
      var bigprime = 1553;
      expect(primeCalculator.calculate(prime)).toEqual('yes');
      expect(primeCalculator.calculate(bigprime)).toEqual('yes');
    });
    it("returns '' if the number is not a prime", function(){
      var prime = 4;
      expect(primeCalculator.calculate(prime)).toEqual('');
    });
  });
});
