class GuessingGame {
	constructor(min, max, current_guess) {
		this.min = 0
		this.max = 0
		this.current_guess = 0
	}

	setRange(min, max) {
		this.min = min
		this.max = max
	}

	guess() {
		this.current_guess = Math.round((this.min + this.max) / 2)
		return this.current_guess
	}

	lower() {
		this.max = this.current_guess
	}

	greater() {
		this.min = this.current_guess
	}
}

module.exports = GuessingGame
