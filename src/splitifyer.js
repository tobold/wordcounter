(function(exports){

  function Splitifyer() {
  }

  Splitifyer.prototype = {
    split: function(string) {
      return string.match(/[a-zA-Z]+/g);
    }
  };

  exports.Splitifyer = Splitifyer;
})(this);
