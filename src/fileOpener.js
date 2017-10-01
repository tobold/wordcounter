(function(exports){

  function FileOpener() {
    this._text = "";
  }

  FileOpener.prototype = {
    load: function(event) {
      var self = this;
      var input = event.target;
      var reader = new FileReader();
      reader.onload = function(){
        self._text = reader.result;
        execute();
      };
      reader.readAsText(input.files[0]);
    },
    text: function() {
      return this._text;
    }
  };

  exports.FileOpener = FileOpener;
})(this);
