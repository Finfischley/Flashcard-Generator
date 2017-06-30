var inquirer = require("inquirer");
var fs = require("fs");

// Constructor function to create new flashcards
var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
}
// prompt user to input questions and answers
inquirer.prompt([
	{
		name: "front",
		type: "input",
		message: "Type in the question: ",
		question: "question"
	}, {
		name: "back",
		type: "input",
		message: "Type in the answer: ",
		answer: "answer"
	}	
	]).then(function(input) {
		// console.log(JSON.stringify(front, back, null, 2));
		var newCard = new BasicCard(
			input.front,
			input.back);
		
		console.log(newCard.front);
		console.log(newCard.back);
	
		var logTxt = "\nFront of Card: " + newCard.front + " Back of Card: " + newCard.back;
		//append text to txt file
		fs.appendFile("BasicCard.txt", logTxt);
	})
		

