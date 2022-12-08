let passwordLength = 8;
// The array that will be modified by the user's chosen criteria
let characterArray = [];

// The character list that will be used for the user's chosen criteria

const lowerCaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '(', ')', '{', '}', '[', ']', '?', '/', '<', '>'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];


// Function to generate the characters based off of the criteria
function generatePassword() {
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characterArray.length)
    password = password + characterArray[randomIndex];
  }
  return password;
}


// Alerts that the user will choose from

function prompts() {
  characterArray = [];
  passwordLength = parseInt(prompt("How many characters would you like your password to be? (Please choose a value between 8 and 128 characters"))
//  If character limit doesn't fit criteria, alert will be sent to user to change character length
  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("The password length must be a number between 8 and 128.");
    return false;
  }
//  Four prompts to create password character list from
  if (confirm("Do you want lowercase letters in your password?")) {
    characterArray = characterArray.concat(lowerCaseCharacters);
  }
  if (confirm("Do you want uppercase letters in your password?")) {
    characterArray = characterArray.concat(upperCaseCharacters);
  }
  if (confirm("Do you want special characters in your password?")) {
    characterArray = characterArray.concat(specialCharacters);
  }
  if (confirm("Do you want numbers in your password?")) {
    characterArray = characterArray.concat(numbers);
  }
 
  return true;
}
 


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {;
  const checkPrompts = prompts();
  const passwordText = document.querySelector("#password")
  if (checkPrompts) {
    const password = generatePassword();
    passwordText.value = password;
} else {
  passwordTest.value = "";
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);