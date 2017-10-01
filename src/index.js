fileOpener = new FileOpener();
wordCounter = new WordCounter();
splitifyer = new Splitifyer();

var execute = function() {
  var output = document.getElementById('output');
  var text = fileOpener.text();
  var wordarray = splitifyer.split(text);
  wordCounter.count(wordarray);
  var wordhash = wordCounter.getWordsHash();
  var wordhtml = '';
  Object.entries(wordhash).forEach(
    ([word, count]) => (wordhtml += '<tr><td>' + word + '</td><td>' + count + '</td></tr>')
  );
  var headerhtml = '<table><tr><th>Word</th><th>Count</th></tr>';
  output.innerHTML = headerhtml + wordhtml + '</table>';
};
