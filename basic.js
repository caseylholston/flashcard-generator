'use strict';
var fs = require('fs');
var Card = require('./FlashCard');
//var questionOne = 'Who was the first president of the United States?'
//var answerOne = 'George Washington'


var Basic = function(fullText, answer){
    this.fullText = fullText;
    this.answer = answer;
}

Basic.prototype = new Card();

var Basic = new Basic (questionOne, answerOne);

console.log("\n--------card----------");
console.log("question: " + Basic.fullText);
console.log("answer: " + Basic.answer);
module.exports = Basics;