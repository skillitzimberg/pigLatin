
// BUSINESS LOGIC

function decidePathForProcess(string) {
  var startingConsonants;
  var vowelsRegex = /[aeiou]/i;
  var lookForQandU = string.search(/^[^aeiou]*qu/i);
  var foundQandU = string.match(/^[^aeiou]*qu/i);

  if (string.search(vowelsRegex) === 0) {
      return (string + "way");

    } else if (lookForQandU === 0){
      foundQandU = foundQandU.toString();
      console.log(foundQandU.length);
      startingConsonants = string.slice(0, foundQandU.length);
      var nextVowelToEndOfString = string.slice(foundQandU.length, string.length);
      return (nextVowelToEndOfString + startingConsonants + 'ay');

    } else {
      var indexOfFirstVowel = findFirstVowel(string);
      startingConsonants = string.slice(0, indexOfFirstVowel);
      var firstVowelToEndOfString = string.slice(indexOfFirstVowel, string.length);
      return (firstVowelToEndOfString + startingConsonants + 'ay');
    }
  };

function findFirstVowel(string) {
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (var index = 1; index <= string.length-1; index++) {
    for (var vowel = 0; vowel <= vowels.length-1; vowel++) {
      if (string[index] === vowels[vowel]) {
        return index;
      }
    }
  }
};

function pigLatin(inputtedString) {
  var words = inputtedString.split(' ');
  var processedWords = "";
  words.forEach(function(word) {
    processedWords += " " + decidePathForProcess(word);
  });
  return processedWords;
}

// UI LOGIC

$(document).ready(function() {
    $("form#inputForm").submit(function(event) {
      event.preventDefault();
      var givenSentence = $("input#sentence").val();
      var pigResult = pigLatin(givenSentence);
      console.log(pigResult);
      $("#result").text(pigResult);
    });
});
