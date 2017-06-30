var inquirer = require("inquirer");
var fs = require("fs");
//constructor that accepts args text and cloze
function ClozeCard (text, cloze) {
	this.text = text,
	this.cloze = cloze,
	this.partialText = this.text.replace(cloze, "__")
}

// prompt user to input questions and answers
inquirer.prompt([
	{
		name: "text",
		type: "input",
		message: "Type in the full sentence of the cloze deletion statement: "
	}, {
		name: "cloze",
		type: "input",
		message: "Type the portion of the text that will be blank: "
	}
]).then(function(input) {
		// console.log(JSON.stringify(text, cloze, null, 2));
		var newCard = new ClozeCard(
			input.text,
			input.cloze
		);
		// console.log(newCard.partialText);
		// console.log(newCard.text);

		//object to hold newCard data
		var logClozeTxt = "\nFront of Card: " + newCard.partialText + " Back of Card: " + newCard.text;
		//append new data to txt file
		fs.appendFile("BasicCard.txt", logClozeTxt);
	})
		
	