
// BUSINESS LOGIC

function pigLatin(string) {
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  for (var index = 0; index <= vowels.length-1; index ++) {
      if (string.startsWith(vowels[index]) === true) {
        return (string + "way");
      } else {

        var indexOfFirstVowel = findFirstVowel(string, vowels);
        var consonantsToRemove = string.slice(0, indexOfFirstVowel);
        var restOfString = string.slice(indexOfFirstVowel, string.length);
        return (restOfString + consonantsToRemove + 'ay');
      }
    }
};

function findFirstVowel(string, vowelArray) {
  for (var index = 1; index <= string.length-1; index++) {
    for (var vowel = 0; vowel <= vowelArray.length-1; vowel++) {
      if (string[index] === vowelArray[vowel]) {
        return index;
      }
    }
  }
};

// UI LOGIC
$(document).ready(function() {
    $("form#inputForm").submit(function(event) {
      event.preventDefault();
      var givenSentence = $("input#sentence").val();
      var pigResult = pigLatin(givenSentence);

      $("#result").text(pigResult);
    });
});
