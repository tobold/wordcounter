(function(exports){

  function WordCounter() {
    this._text = "";
  }

  WordCounter.prototype = {
    count: function(array) {
      var hash = {}
      array.forEach(function(word) {
        if(hash.hasOwnProperty(word)) {
          hash[word] = hash[word] + 1
        } else {
          hash[word] = 1;
        }
      });
      return hash
    }
  };

  exports.WordCounter = WordCounter;
})(this);
