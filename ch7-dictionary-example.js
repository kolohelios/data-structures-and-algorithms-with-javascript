// Ch. 7 - Dictionaries
'use strict';

var Dictionary = require('./ch7-dictionary');

var pbook = new Dictionary();
pbook.add('Mike', '123');
pbook.add('David', '345');
pbook.add('Cynthia', '456');
pbook.add('Raymond', '555');
pbook.add('Danny', '788');
pbook.add('George', '343');
console.log('David\'s extension: ' + pbook.find('David'));
pbook.remove('David');
pbook.showAll();
console.log('count before clear');
console.log(pbook.count());
pbook.clear();
console.log('count after clear');
console.log(pbook.count());
