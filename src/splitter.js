(function(exports){

  function Splitter() {
  }

  Splitter.prototype = {
    split: function(string) {
      return string.match(/[a-zA-Z]+/g);
    }
  };

  exports.Splitter = Splitter;
})(this);
