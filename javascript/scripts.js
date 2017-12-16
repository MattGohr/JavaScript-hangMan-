//create player array: you can add as many words to the list as you want.
var words = ["dhalsim", "ryu", "guile", "akuma", "sagat"];

//wins
var wins = document.getElementById("wins");

//change innter html to number
// var wins.innerHTML

//words guessed
var guessWord = document.getElementById("guess-word-placeholder");

//letters guessed
var lettersGuessed = document.getElementById("letters-guessed");

//random word in array index
// var randWord = Math.floor(Math.random() * words.length) + 0;
var randWord = 3;

//hangman view word
var hangManViewWord = [];

//guesses variable
var guessLeft = 15;

//correct letters log variable
var correctLetters2 = {

};

var correctLetters = "";

//incorrect guesses
var incorrectLetters = "";
var letterBank = "";

//wins
var wins = 0;

//divs
var hangeManDiv = document.getElementById("hangman-word-placeholder");
var correctGuessDiv = document.getElementById("letters-guessed");
var guessCountDiv = document.getElementById("guesses-remaining");


//hide hangman word
function hideHangman() {
  hangManViewWord = [];

  //add same number of dahses as there are words
  for (var i = 0; i < words[randWord].length; i++) {

    //load dashes
    hangManViewWord[i] = "_ ";

  }

  //insert into html
  hangeManDiv.innerHTML = combineArraySameLine(hangManViewWord);

}

//comnine elements on the same line
function combineArraySameLine(arg1) {

  var complete = ""

  //loop through each index and print to
  for (var i = 0; i < arg1.length; i++) {

    complete = complete + arg1[i];

  }
  return complete;

}

//rewrite hangeman
function reWriteHangMan(letterGuessed) {

  //check to see if nothing is passed in
  if (typeof letterGuessed !== "undefined") {

    //search for letter index in original word
    var x = words[randWord].indexOf(letterGuessed);

    var placeholderWord = words[randWord]

    //loop through indexes and fill in all instances of correct letter
    for (var i = 0; i < placeholderWord.length; i++) {
      if (letterGuessed === placeholderWord[i]) {

        //replace
        hangManViewWord[i] = letterGuessed + " ";

        //add to bank
        correctLetters = correctLetters + letterGuessed;
      }
    }

  }
}

//load hangman "_"
hideHangman();

//WHEN KEY IS PRESSED -------------------------------------------------------------------
document.onkeyup = function(event) {

  // Captures the key press, converts it to lowercase, and saves it to a variable.
  var letter = String.fromCharCode(event.keyCode).toLowerCase();

  //console.log("letter: "+ letter);

  var findLetter = words[randWord].toLowerCase().search(letter);

  //console.log(findLetter);
  var wrongLetterCheck = letterBank.toLowerCase().search(letter);

  if (wrongLetterCheck >= 0) {
    //skip
  } else {

    //check to see if true
    if (findLetter >= 0) {

      //add to hangman
      reWriteHangMan(letter);

      //search the correct letters object to see if it's in there

      //if yes then find index and search replace from there

      //if no then find occurance and replace.


      //add correct letter guess
      // correctLetters = correctLetters + letter;

      //add to correct 2 the letter and indexOf
      // correctLetters

      //print new hangman array
      hangeManDiv.innerHTML = combineArraySameLine(hangManViewWord);


    }

    //if incorrect
    if (findLetter < 0) {

      //log incorrect letters
      incorrectLetters = incorrectLetters + letter;
      letterBank = letterBank + letter;

      //display incorrect letters guessed

      correctGuessDiv.innerHTML = combineArraySameLine(incorrectLetters);

      //decrease letters guessed
      guessLeft = guessLeft - 1;

      guessCountDiv.innerHTML = guessLeft;


    }
  }



  //Win
  if (correctLetters.length === words[randWord].length) {

    //add wins
    wins++

    //log win
    var winCountDiv = document.getElementById("wins");
    winCountDiv.innerHTML = wins;

    //restart hangman
    hangeManDiv.innerHTML = "";
    randWord = Math.floor(Math.random() * words.length) + 0;
    hideHangman();

    //new word
    hangeManDiv.innerHTML = combineArraySameLine(hangManViewWord);

    //set letters to ""
    correctLetters = "", incorrectLetters = "", letterBank = "";

    //reset guesses
    guessLeft = 15;
    guessCountDiv.innerHTML = guessLeft;

    correctGuessDiv.innerHTML = "_";


  }

  //if loss
  if (guessLeft === 0) {

    //restart
    randWord = Math.floor(Math.random() * words.length) + 0;
    hangeManDiv.innerHTML = "";
    hideHangman();

    //new word
    hangeManDiv.innerHTML = combineArraySameLine(hangManViewWord);

    //set letters to ""
    correctLetters = "", incorrectLetters = "", letterBank = "";

    //reset letters guessed
    guessLeft = 15;
    guessCountDiv.innerHTML = guessLeft;

    correctGuessDiv.innerHTML = "_";
  }

  console.log(words[randWord])

}

//generate current word cound on first game

//check to see if letter is in string

//
//                targetDiv.innerHTML = "Hello friends!";
//                var newDiv = document.createElement("div");
//                newDiv.innerHTML = "A pleasure to meet you!";
//
//                targetDiv.appendChild(newDiv);
//
//                // We then apply that CSS to our newDiv.
//                newDiv.setAttribute("class", "fancy");
