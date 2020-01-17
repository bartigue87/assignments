var readline = require('readline-sync');

var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

function caesarCipher(str , num){
    var lowerCaseStr = str.toLowerCase();
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    var newStr = "";

    for (var i = 0; i < lowerCaseStr.length; i++){
        var currentLetter = lowerCaseStr[i];
        if(currentLetter === " "){
            newStr += currentLetter;
            continue;
        }
        var currentIndex = alphabet.indexOf(currentLetter);
        var newIndex = currentIndex + num;
        if(newIndex > 25) newIndex = newIndex - 26;
        if(newIndex < 0) newIndex = newIndex +26;
        if(str[i] === str[i].toUpperCase()){
            newStr += alphabet[newIndex].toUpperCase();
        }
        else newStr += alphabet[newIndex];
    } 
    return newStr
}
console.log(caesarCipher(input, shift))