
/*
  Translates a 1 character-length string via ROT13.
  Rotates any letter by 13 (UPDATE: by a user specified number of) positions, maintaining capitalization.
  Leaves any other number or symbol alone.

  Returns the modified character.
*/

var translateCharacter = function(character, index) {
  
  var charCode = character.charCodeAt(0);

  // Lowercase
  if (charCode >= 97 && charCode <= 122) 
  {

    if (((charCode + index) % 123) < 97) 
    {
      return String.fromCharCode(((charCode + index) % 123) + 97);
    }

    return String.fromCharCode(charCode + index);

  }

  // Uppercase
  if (charCode >= 65 && charCode <= 90) 
  {

    if (((charCode + index) % 91) < 65) 
    {
      return String.fromCharCode(((charCode + index) % 91) + 65);
    }

    return String.fromCharCode(charCode + index)

  }

  // Anything else is a number or symbol. Leave it alone.
  return character;
}


var addMessage = function(message, index) {

  var translatedMessage = "";

  for ( var i = 0 ; i < message.length ; i++ )
  {
    translatedMessage += translateCharacter(message[i], index);
  }

  var messageToAdd = "<div class='returnMessage' >" + translatedMessage + "</div>";

  $("#displayText").append(messageToAdd);

};

$("#inputTranslate").on("click", function(){
  
  addMessage($("#inputText").val(), Number($("#indexInput").val()));


})
