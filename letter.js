var Letter = function(letter) {
	this.character = letter.toLowerCase();
	this.appear = false;

	this.letterRender = function() {
		if (this.appear === false) {
			return "_ ";
		} else {
			return (this.character + " ");
		}
	}
}

module.exports = Letter;