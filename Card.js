var inquirer = require("inquirer");
var fs = require("fs");

inquirer.prompt([
	{
	name:"cardType",
	type: "rawlist",
	message: "Would you like to make a Basic Card, a Cloze-Deletion Card, or Review Cards you have made?",
	choices: ["Basic", "Cloze-Deletion", "Review Cards"] 
	}]).then(function(answer) {
      // based on their answer, either call the basic or cloze card functions
      if (answer.cardType === "Basic") {
        var BasicCard = require("./BasicCard");
      }else if (answer.cardType === "Cloze-Deletion") {
        var ClozeCard = require("./ClozeCard");
      }else if (answer.cardType === "Review Cards"){
      	fs.readFile("BasicCard.txt", "utf8", (err, data) => {
      		if (err) throw err;
      		console.log(data);
      	});
      	
      }
    });





// var newBasicCard = new BasicCard();
// var newClozeCard = new ClozeCard();

