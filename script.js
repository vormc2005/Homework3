var TextEl = document.getElementById('password');
var lengthEl = document.getElementById('length');
var upperEl = document.getElementById('upperletters');
var lowerEl = document.getElementById('lowerletters');
var numbersEl = document.getElementById('numbers');
var generateEl = document.getElementById('generate');
var clipboardEl = document.getElementById('clipboard');
var charactersEl = document.getElementById('characters');


//creat random variable object


var random = {
  lower: RandomLow,
  upper: RandomUpper,
  number: RandomNumber,
 character: randomchar,
};

generateEl.addEventListener('click', () => {
  var lentgh = +lengthEl.value;
  var hasLower = lowerEl.checked;
  var hasUpper = upperEl.checked;
  var hasNumber = numbersEl.checked;
 var haschar = charactersEl.checked; 

  TextEl.innerText = generatePassword(
    hasLower, 
    hasUpper, 
    hasNumber, 
    haschar,
    lentgh
    );

});

///////// Copy password to clipboard***************////////////
clipboardEl.addEventListener('click', ()=> {
var clipboardCopy = document.getElementById("password");



// 1.to select content in the text area

clipboardCopy.select();

// 2. to copy to clip board
document.execCommand("Copy");

alert("Content copied to clipboard!");

});


// Generate Password-----------------
// 1. Filter unclicked////////
// 2. Length
// *****************************

function generatePassword(lower, upper, number, character, length){

let yourPassword = '';
var typesCount = lower + upper + number+character;

console.log('typesCount', typesCount);

var typesArr = [{ lower }, { upper}, { number}, {character}].filter(item => Object.values(item)[0]
);

 if(length <=7 || length >=129){
   
  
   return 'Password must be between 8 and  128 characters long!';
 }
if(typesCount ===0){
  return '';
}

  for(let i=0; i<length; i+=typesCount) {
    typesArr.forEach(type=> {
      var funcName = Object.keys(type)[0];

      console.log('funcName:', funcName);

      yourPassword += random[funcName]();

    });
  }
  var getyourPassword = (yourPassword.slice(0, length));

  return getyourPassword;
}


// Arrays needed for password generation********************************//


// Lower case/////////////////////
function RandomLow(){
  var lowerCase = 'qwertyuiopasdfghjklzxcvbnm'
  return lowerCase[Math.floor(Math.random()*lowerCase.length)];
 
}

console.log(RandomLow());

// Upper Case/////////////////////
function RandomUpper(){
  var UpperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM'
  return UpperCase[Math.floor(Math.random()*UpperCase.length)];
 
}

console.log(RandomUpper());


// Random number///////////////////////


function RandomNumber(){
  var number = '1234567890'
  return number[Math.floor(Math.random()*number.length)];
}

console.log(RandomNumber());

function randomchar(){
    var character = '!@#$%^&*()}{[]\|'
    return character[Math.floor(Math.random()*character.length)];
  }
  
  console.log(randomchar());
  


// **************************************





// Assignment Code
// var generateBtn = document.querySelector("#generate");


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

//   copyBtn.removeAttribute("disabled");
//   copyBtn.focus();
// }

// function copyToClipboard() {
//   // BONUS 
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // BONUS EVENT LISTENER
