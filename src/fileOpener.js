(function(exports){

  function FileOpener(filereader) {
    this._text = "";
    this.filereader = filereader;
  }

  FileOpener.prototype = {
    load: function(event) {
      var self = this;
      var reader = this.filereader;
      reader.onload = function(){
        self._text = reader.result;
      };
      reader.readAsText(event.target.files[0]);
    },
    text: function() {
      return this._text;
    }
  };

  exports.FileOpener = FileOpener;
})(this);
