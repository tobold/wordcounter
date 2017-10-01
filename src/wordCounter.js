(function(exports){

  function WordCounter() {
    
  }

  WordCounter.prototype = {
    count: function(array) {
      var hash = {}
      array.forEach(function(word) {
        if(hash.hasOwnProperty(word)) {
          hash[word] ++
        } else {
          hash[word] = 1;
        }
      });
      return hash
    }
  };

  exports.WordCounter = WordCounter;
})(this);
