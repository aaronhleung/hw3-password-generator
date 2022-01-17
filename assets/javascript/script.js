var lowercaseChar = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numChar = '0123456789';
var caseCheck;
var numberCheck;
var specialCharCheck;

function getLength() {
  passwordLength = prompt("Choose a password length between 8-128 characters");
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Password length must be between 8-128 characters.");
  }
  return passwordLength;
}

// prompts user asking if they would like to include uppercase letters in password
function includeUppercase() {
  caseCheck = prompt("Include uppercase letters in your password?");
  caseCheck = caseCheck.toLowerCase();
  if (caseCheck === 'yes') {
    caseCheck = true;
  } else if (caseCheck === 'no') {
    caseCheck = false;
  } else {
  caseCheck = alert("Please type \"yes\" or \"no\"")
  includeUppercase();
  }
  return caseCheck
}

// prompts user asking if they would like to include numbers in password

function includeNumbers() {
  numberCheck = prompt("Include numbers in your password?");
  numberCheck = numberCheck.toLowerCase();
  if (numberCheck === 'yes') {
    numberCheck = true;
  } else if (numberCheck === 'no') {
    numberCheck = false;
  } else {
  numberCheck = alert("Please type \"yes\" or \"no\"")
  includeNumbers();
  }
  return numberCheck;
}

// prompts user asking if they would like to include special characters in password

function includeSpecialChar() {
  specialCharCheck = prompt("Include special characters in your password?");
  specialCharCheck = specialCharCheck.toLowerCase();
  if (specialCharCheck === 'yes') {
    specialCharCheck = true;
  } else if (specialCharCheck === 'no') {
    specialCharCheck = false;
  } else {
  specialCharCheck = alert("Please type \"yes\" or \"no\"")
  includeSpecialChar();
  }
  return specialCharCheck;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  getLength();
  console.log(passwordLength);
  includeUppercase();
  console.log(caseCheck);
  includeNumbers();
  console.log(numberCheck);
  includeSpecialChar();
  console.log(specialCharCheck);

  // user's criteria (uppercase, numbers, special characters) are added to the character string
  var characters = lowercaseChar;
  var password = '';
  if (caseCheck && numberCheck && specialCharCheck) {
    characters += uppercaseChar + numChar + specialChar;
  } else if (caseCheck && numberCheck) {
      characters += uppercaseChar + numChar;
  } else if (numberCheck && specialCharCheck) {
        characters += numChar + specialChar;
  } else if (caseCheck && specialCharCheck) {
        characters += uppercaseChar + specialChar
  } else if (caseCheck) {
        characters += uppercaseChar;
  } else if (numberCheck) {
        characters += numChar;
  } else if (specialCharCheck) {
        characters += specialChar;
  } else {
    characters === lowercaseChar;
  }
  // random chars from the character string are concatenated into the password string
  // passwordLength number of times.
  for (var i = 0; i < passwordLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
    return password;
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);