'use strict';
var fs = require('fs');
// var Card = require('./FlashCard');
// var fullText = 'George Washington was the first president of the United States'
// var cloze = 'George Washington'
var fullText= '';
var cloze = '';


var ClozeCard = function (fullText,cloze) {
    if (!(this instanceof ClozeCard))
        return new ClozeCard(fullText, cloze)
    this.fullText = fullText;
    this.cloze = cloze;
    this.partial = fullText.replace(cloze, '...')

}

// ClozeCard(fullText, cloze);

// var Cloze = new ClozeCard(fullText, cloze);

// console.log("\n--------card----------");
// console.log('full: ' + Cloze.fullText);
// console.log("question: " + Cloze.partial);
// console.log("answer: " +Cloze.cloze);

module.exports = ClozeCard;

