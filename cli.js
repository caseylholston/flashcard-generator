'use strict';
var inquirer = require('inquirer');
var fs = require('fs');
var command = process.argv[2];
var fullText = process.argv[3];
var answer = process.argv[4];

function FlashCard (command, fullText, answer){
     if (!(this instanceof FlashCard))
        return new Flashcard(command, fullText, answer)
    this.command = command;
    this.fullText = fullText;
    this.answer = answer;
    this.arguments = Array.prototype.slice.call(arguments);
}


var input = new FlashCard (command, fullText, answer);

module.exports.FlashCard;

console.log(input);
console.log('Command: ' + input.command);
console.log('FullText: ' + input.fullText);
console.log('Answer: ' + input.answer);





// switch(command) {
// case 'basic':
// input.newBasic();
// // search.logIt();
// break;
// }

// case 'cloze':
// search.doAdmin();
// break;
// }
