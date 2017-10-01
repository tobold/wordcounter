(function(exports){

  function WordPrinter(primeCalculator) {
    this.primeCalculator = primeCalculator;
  }

  WordPrinter.prototype = {
    print: function(hash) {
      var wordhtml = '';
      var headerhtml = '<table><tr><th>Word</th><th>Count</th><th>Prime?</th></tr>';
      for (var [word, count] of Object.entries(hash)) {
        var prime = this.primeCalculator.calculate(count);
        wordhtml += `<tr><td>${word}</td><td>${count}</td><td>${prime}</td></tr>`;
      }
      return headerhtml + wordhtml + '</table>';
    }
  };

  exports.WordPrinter = WordPrinter;
})(this);
