(function(exports){

  function WordCounter() {
    this._wordsHash = {};
  }

  WordCounter.prototype = {
    count: function(array) {
      var hash = this._wordsHash;
      array.forEach(function(word) {
        if(hash.hasOwnProperty(word.toLowerCase())) {
          hash[word.toLowerCase()] ++;
        } else {
          hash[word.toLowerCase()] = 1;
        }
      });
      return this._wordsHash;
    }
  };

  exports.WordCounter = WordCounter;
})(this);
