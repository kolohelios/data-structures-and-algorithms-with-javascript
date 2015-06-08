// Ch. 7 - Dictionaries
'use strict';

// 2. and 3. use dictionary for a string of text and sort them

var Dictionary = require('./ch7-dictionary');

var textDict = new Dictionary();
var textString = 'the brown fox jumped over the blue fox';

textString.split(' ').forEach(function(word){
  var wordCount = textDict.dataStore[word] ? textDict.dataStore[word] + 1 : 1;
  textDict.add(word, wordCount);
});
textDict.showAll();
