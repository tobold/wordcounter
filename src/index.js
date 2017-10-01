var fileReader = new FileReader();
var fileOpener = new FileOpener(fileReader);
var wordCounter = new WordCounter();
var splitter = new Splitter();
var primeCalculator = new PrimeCalculator();
var wordPrinter = new WordPrinter(primeCalculator);

var execute = function() {
  var output = document.getElementById('output');
  var text = fileOpener.text();
  var wordarray = splitter.split(text);
  var wordhash = wordCounter.count(wordarray);
  var html = wordPrinter.print(wordhash);
  output.innerHTML = html;
};
