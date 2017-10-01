describe("FileOpener", function() {
  var fileMock = {};
  var filereader = jasmine.createSpyObj("filereader", {
    'result': 'test',
    'readAsText': null
  });

  beforeEach(function() {
    fileOpener = new FileOpener(filereader);
  });

  describe("#load", function(){
    it("delegates to the FileReader object", function(){
      fileOpener.load(fileMock);
      expect(filereader.readAsText).toHaveBeenCalled();
    });
  });
});
