
// BUSINESS LOGIC

function pigLatin(string) {
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  for (var index = 0; index <= vowels.length-1; index ++) {
      if (string.startsWith(vowels[index]) === true) {
        return (string + "way");
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
