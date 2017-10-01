(function(exports){

  function WordCounter() {
  }

  WordCounter.prototype = {
    count: function(array) {
      var wordHash = {};
      array.forEach(function(word) {
        if(wordHash.hasOwnProperty(word.toLowerCase())) {
          wordHash[word.toLowerCase()] ++;
        } else {
          wordHash[word.toLowerCase()] = 1;
        }
      });
      return wordHash;
    }
  };

  exports.WordCounter = WordCounter;
})(this);
