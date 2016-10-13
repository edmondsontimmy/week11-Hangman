var fs = require('fs');

var Word = function(word, lettersOfWord) {
	this.word = word;
	this.lettersOfWord = lettersOfWord;
};


fs.readFile("words/Animal.txt", "utf8", function(error, data) {
		console.log(data);

	var dataArr = data.split(',');
	for (data in dataArr) {
		console.log(dataArr[data]);
	}
	// console.log(dataArr.join("+"));
	// turns array back into a string
})

module.exports = Word;


