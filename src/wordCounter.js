(function(exports){

  function WordCounter() {
    this._wordsHash = {};
  }

  WordCounter.prototype = {
    count: function(array) {
      var hash = this._wordsHash;
      array.forEach(function(word) {
        if(hash.hasOwnProperty(word)) {
          hash[word] ++;
        } else {
          hash[word] = 1;
        }
      });
      return hash;
    }
  };

  exports.WordCounter = WordCounter;
})(this);
