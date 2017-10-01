describe("WordPrinter", function() {
  beforeEach(function() {
    wordPrinter = new WordPrinter();
  });

  describe("#print", function(){
    it("returns a relational hash as html", function(){
      var wordHash = { 'Foo' : 2, 'Bar' : 1};
      expect(wordPrinter.print(wordHash)).toEqual(
        ['<table>',
          '<tr>',
            '<th>Word</th>',
            '<th>Count</th>',
            '<th>Prime?</th>',
          '</tr>',
          '<tr>',
            '<td>Foo</td>',
            '<td>2</td>',
            '<td></td>',
          '</tr>',
          '<tr>',
            '<td>Bar</td>',
            '<td>1</td>',
            '<td></td>',
          '</tr>',
        '</table>'].join(''));
    });
  });
});
