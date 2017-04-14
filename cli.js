'use strict';
var inquirer = require('inquirer');
var fs = require('fs');
var command = process.argv[2];
var fullText = '';
var answer = '';


var question1 =    [
    {
        type:'list',
        name:'action',
        message:'What would you like to do?',
        choices:['Create a Flashcard', 'Study']
    }];

var question2a =    [
    {
        type:'list',
        name:'createCardType',
        message:'What type of card would you like to create?',
        choices:['Basic', 'Cloze']
    }];

var question2b =    [
    {
        type:'list',
        name:'quizType',
        message:'What type of quiz would you like to take?',
        choices:['Basic', 'Cloze']
    }];


var question3a =    [
    {
        type:'input',
        name:'basicQuestion',
        message:'Please type the question to be answered and press ENTER',
    },
    {
        type:'input',
        name:'basicAnswer',
        message:'Please type the answer to the question and press ENTER',
    }

    ];

var question3b =    [
  {
        type:'input',
        name:'clozeQuestion',
        message:'Please type the sentence to be used and press ENTER',
    },
    {
        type:'input',
        name:'cloze',
        message:'Please type the cloze portion of the sentence and press ENTER',
    }

    ];

// console.log(input);
// console.log('Command: ' + input.command);
// console.log('FullText: ' + input.fullText);
// console.log('Answer: ' + input.answer);

inquirer.prompt(question1).then(function (answers){
    switch(answers.action) {
    case 'Create a Flashcard':
           inquirer.prompt(question2a).then(function (answers){
                switch(answers.createCardType) {
                case 'Basic':
                    inquirer.prompt(question3a).then(function (answers){
                    fs.appendFile('basic.txt', ','+ answers.basicQuestion +','+ answers.basicAnswer, function(err){
                        if (err) (console.log('Error: ' + err))});
                    });
                break;

                case 'Cloze':
                    inquirer.prompt(question3b).then(function (answers){
                    fs.appendFile('cloze.txt', ','+ answers.clozeQuestion +','+ answers.cloze, function(err){
                        if (err) (console.log('Error: ' + err))});
                    });
                break;
                } 
            })
    break;
    
    case 'Study':
           inquirer.prompt(question2b).then(function (answers){
                switch(answers.createCardType) {
                case 'Basic':
                doBasicQuiz();
                break;

                case 'Cloze':
                doClozeQuiz();
                break;
                } 
            })
    break;    

}
});
