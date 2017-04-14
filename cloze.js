'use strict';
var fs = require('fs');
var fullText= '';
var cloze = '';


var ClozeCard = function (fullText,cloze) {
    if (!(this instanceof ClozeCard))
        return new ClozeCard(fullText, cloze)
    this.fullText = fullText;
    this.cloze = cloze;
    this.partial = fullText.replace(cloze, '...')

}

module.exports = ClozeCard;

