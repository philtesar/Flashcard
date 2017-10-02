var inquirer = require("inquirer");
var cards = []
var cardCount = 0

function BasicCard(front, back) {
    this.front = front
    this.back = back
}

var card1 = new BasicCard("Which Cleveland sports teams plays their home games at First Energy Stadium?", "Browns");
var card2 = new BasicCard("Which Cleveland sports teams plays their home games at Quicken Loans Arena?", "Cavs");
var card3 = new BasicCard("Which Cleveland sports teams plays their home games at Progressive Field?", "Indians");

cards.push(card1);
cards.push(card2);
cards.push(card3);


function study() {
    if (cardCount < cards.length) {

        inquirer.prompt([{
            name: "question",
            message: cards[cardCount].front
        }]).then(function(answer) {

            if ((answer.question) === cards[cardCount].back) {
                console.log("correct");
                console.log("----------------------\n");
                cardCount++
                study();
            } else {
                console.log("incorrect");
                console.log("BACK READS:  " + cards[cardCount].back);
                console.log("----------------------\n");
                cardCount++
                study();
            }
        });
    }
}

study();