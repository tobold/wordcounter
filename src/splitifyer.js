(function(exports){

  function Splitifyer() {
  }

  Splitifyer.prototype = {
    split: function(string) {
      return string.match(/[a-zA-Z0-9]+/g)
    }
  };

  exports.Splitifyer = Splitifyer;
})(this);
