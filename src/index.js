fileReader = new FileReader();
fileOpener = new FileOpener(fileReader);
wordCounter = new WordCounter();
splitifyer = new Splitifyer();
wordPrinter = new WordPrinter();

var execute = function() {
  var output = document.getElementById('output');
  var text = fileOpener.text();
  var wordarray = splitifyer.split(text);
  var wordhash = wordCounter.count(wordarray);
  var html = wordPrinter.print(wordhash);
  output.innerHTML = html;
};
