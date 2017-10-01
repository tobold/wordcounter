(function(exports){

  function WordPrinter() {
  }

  WordPrinter.prototype = {
    print: function(hash) {
      var wordhtml = '';
      var headerhtml = '<table><tr><th>Word</th><th>Count</th><th>Prime?</th></tr>';
      Object.entries(hash).forEach(
        ([word, count]) => (wordhtml += '<tr><td>' + word + '</td><td>' + count + '</td><td>' + '' + '</td></tr>')
      );
      return headerhtml + wordhtml + '</table>';
    }
  };

  exports.WordPrinter = WordPrinter;
})(this);
