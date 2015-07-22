var censoredWords = ["sad","bad","mad"];
var customCensoredWord = [];

function censor(inStr){
	for(idx in censoredWords){
		inStr = inStr.replace(censoredWords[idx], "****");
		
	}
	
	for(idx in customCensoredWord){
		inStr = inStr.replace(customCensoredWord[idx], "****");
	}
	return inStr;
}

function addCensoredWords(word){
	customCensoredWord.push(word);
}

function getCensoredWords(){
	return censoredWords.concat(customCensoredWord); 
}

exports.censor = censor;
exports.addCensoredWords = addCensoredWords;
exports.getCensoredWords = getCensoredWords;
