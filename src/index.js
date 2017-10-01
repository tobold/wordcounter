var fileReader = new FileReader();
var fileOpener = new FileOpener(fileReader);
var wordCounter = new WordCounter();
var splitifyer = new Splitifyer();
var primeCalculator = new PrimeCalculator();
var wordPrinter = new WordPrinter(primeCalculator);

var execute = function() {
  var output = document.getElementById('output');
  var text = fileOpener.text();
  var wordarray = splitifyer.split(text);
  var wordhash = wordCounter.count(wordarray);
  var html = wordPrinter.print(wordhash);
  output.innerHTML = html;
};
