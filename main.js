var prompt = require("prompt");
prompt.start();
var Word = require("./word.js");

var game = {
  wordBank: ["Wolverine", "Hulk", "Batman", "Spiderman", "Magneto", "Venom", "Flash"],
  guessesRemaining: 10,
  currentWord: null,
  startGame: function(word) {
    this.randomWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];
    // console.log(randomWord);
    this.currentWord = new Word(this.randomWord);
    this.currentWord.getLetters();
    // console.log(this.currentWord);
    console.log(this.currentWord.wordRender());

    this.keepPrompting();
  },

  keepPrompting: function() {
    var self = this;
    prompt.get(["guessLetter"], function(error, result) {
      console.log("Letter guess: " + result.guessLetter);
      var findHowManyUserGuess = self.currentWord.checkIfLetterFound(result.guessLetter);
      // console.log("Guess " + findHowManyUserGuess);

      if (findHowManyUserGuess === 0) {
        console.log("Wrong");
        self.guessesRemaining -= 1;
        
        if (self.guessesRemaining === 0) {
              console.log("Game Over");
              console.log("The word was " + self.randomWord);
            } else {
              console.log("Guesses remaining: " + self.guessesRemaining);
              console.log(self.currentWord.wordRender());
              self.keepPrompting();
            }
        
      } else {
        console.log("Right");
        if (self.currentWord.checkIfWordFound()) {
          console.log("You win!");
          return 1;
        } else {
          console.log("Guesses remaining: " + self.guessesRemaining);
          console.log(self.currentWord.wordRender());
          self.keepPrompting();
          
        }

      }

    });
  }

}

game.startGame();