'use strict';
var fs = require('fs');
var fullText= '';
var answer= '';
//var questionOne = 'Who was the first president of the United States?'
//var answerOne = 'George Washington'


var BasicCard = function(fullText, answer){
    if (!(this instanceof BasicCard))
        return new BasicCard(fullText, answer)
    this.fullText = fullText;
    this.answer = answer
}

module.exports = BasicCard;
// var Basic = new Basic (questionOne, answerOne);

// console.log("\n--------card----------");
// console.log("question: " + Basic.fullText);
// console.log("answer: " + Basic.answer);
// module.exports = Basics;