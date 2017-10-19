var letter = require("./letter.js");

var Word = function(word) {
    this.word = word;
    this.letters = [];
    this.found = false;

    this.getLetters = function() {
        for (var i = 0; i < this.word.length; i++) {
            var newLetter = new letter(this.word[i]);
            this.letters.push(newLetter);
        }
    }

    this.checkIfLetterFound = function(guessLetter) {
        var whatToReturn = 0;
        for (var i = 0; i < this.letters.length; i++) {
            if (this.letters[i].character === guessLetter) {
                this.letters[i].appear = true;
                ++whatToReturn;
                // console.log("What to return" + whatToReturn);
                
            }
        }
        return whatToReturn;
    }

    this.checkIfWordFound = function() {
        var found = false;

        if (this.letters.every(checkAppearTrue)) {
            found = true;
            return found;
        }

        function checkAppearTrue(value, index, ar) {
            if (value.appear === true) {
                return true;
            } else {
                return false;
            }
        }
    }

    this.wordRender = function() {
        var str = "";
        
        for (var i = 0; i < this.letters.length; i++) {
            
            str += this.letters[i].letterRender();
            // console.log("test" + this.letters[i]);
            
        }
        
        return str;
    }
}

module.exports = Word;