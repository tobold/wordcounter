(function(exports){

  function PrimeCalculator() {
  }

  PrimeCalculator.prototype = {
    calculate: function(number) {
      for(var i = 2; i < number; i++) {
        if(number % i === 0) {return '';}
      }
      if(number !== 1) {return 'yes';} else { return ''; }
    }
  };

  exports.PrimeCalculator = PrimeCalculator;
})(this);
