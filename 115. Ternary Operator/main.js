function isUserValid(bool) {
	return bool;
}

// Simple usage
var answer = isUserValid (false) ? "Welcome" : "Sorry, you do not have access to this."

// With text. Place the tenerary operator in brackets.
var automatedAnswer = "Your password is " + (isUserValid(false) ? "correct" : "wrong.");