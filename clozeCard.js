var inquirer = require("inquirer");
var cards = [];
var cardCount = 0;
var clozeText

function ClozeCard(text, cloze) {
    this.text = text
    this.cloze = cloze
}

ClozeCard.prototype.full = function() {
    clozeDeleted = this.cloze
    clozeText = this.text
    clozeText = clozeText.replace("...", clozeDeleted);
    console.log(clozeText);
}

var card1 = new ClozeCard("The Cleveland Browns play their home games at ... Stadium.", "First Energy");
var card2 = new ClozeCard("The Cleveland Cavs play their home games at ... Loans Arena.", "Quicken");
var card3 = new ClozeCard("The Cleveland Indians play their home games at ... Field.", "Progressive");

cards.push(card1);
cards.push(card2);
cards.push(card3);

function study() {
    if (cardCount < cards.length) {

        inquirer.prompt([{
            name: "partial",
            message: cards[cardCount].text
        }]).then(function(answer) {
            if ((answer.partial) === cards[cardCount].cloze) {
                console.log("correct");
                console.log("----------------------\n");
                cardCount++
                study();
            } else {
                console.log("incorrect");
                cards[cardCount].full();
                console.log("----------------------\n");
                cardCount++
                study();
            }
        });
    }
}

study();