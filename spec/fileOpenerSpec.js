describe("FileOpener", function() {
  var event = jasmine.createSpyObj("event", {
    'place': null
  });

  var filereader = jasmine.createSpyObj("filereader", {
    'result': 'test'
  });

  beforeEach(function() {
    fileOpener = new FileOpener(filereader);
  });

  describe("#load", function(){
    it("loads a file", function(){
      // fileOpener.load(event);
      // expect(fileOpener.text()).toEqual("test");
    });
  });
});
