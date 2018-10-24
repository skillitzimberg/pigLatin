
// BUSINESS LOGIC

function pigLatin(string) {
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  for (var index = 0; index <= vowels.length-1; index ++) {
      if (string.startsWith(vowels[index]) === true) {
        return (string + "way");
      } else {
        var firstLetter = string.slice(0, 1);
        var restOfString = string.slice(1, string.length);
        return (restOfString + firstLetter + 'ay');
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
