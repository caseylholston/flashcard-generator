var fs = require('fs');
var ClozeCard = require('./cloze.js');
var clozeQuestions = [];

fs.readFile('cloze.txt', 'utf8', function (err,data){
        if (err) {
            console.log('Error: ' + err)}
        else {
           var response = data.split(',');
           //console.log('Response outside for loop: ' + response.length);
           //console.log(response[0]);
           for ( var i = 0; i < response.length; i+=2) {
               Cloze = new ClozeCard(response[i], response[i+1]);
               //console.log(Cloze);
               //console.log('Question: ' + Cloze.partial + '\n');
               clozeQuestions.push(Cloze.partial);
               
                }
            console.log('CLOZE QUESTIONS: ' + clozeQuestions[0]);
            } 
        });
// var Cloze = new ClozeCard(fullText, cloze);

// console.log('ClozeCard: ' + ClozeCard);
// console.log("\n--------card----------");
// console.log('full: ' + Cloze.fullText);
// console.log("question: " + partial);
// console.log("answer: " + cloze);