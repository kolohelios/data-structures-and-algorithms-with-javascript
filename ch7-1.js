// Ch. 7 - Dictionaries
'use strict';

// 1. phone book

var Dictionary = require('./ch7-dictionary');
var fs = require('fs');
var prompt = require('prompt');

prompt.start();

function onErr(err){
  console.log(err);
  return 1;
}

var pbook = new Dictionary();

fs.readFile('ch7-phone-book.txt', 'utf8', function(err, contents){
  if(err){console.log(err); }
  var phoneBook = contents.trim().split('\n');
  phoneBook.forEach(function(entry){
    entry = entry.split(' ');
    pbook.add(entry[0], entry[1]);
  });
  var menuChoice;
  function promptMenu(){
    console.log('Enter one of the following options:');
    console.log('a. Show all entries');
    console.log('b. Show one entry');
    console.log('c. Add a new entry');
    console.log('d. Remove an entry');
    console.log('e. Clear all entries');
    console.log();
    prompt.get(['command'], function(error, result){
      if(error){return onErr(error); }
      menuChoice = result.command;
      switch(menuChoice){
        case 'a':
          pbook.showAll();
          console.log();
          promptMenu();
          break;
        case 'b':
          prompt.get(['name'], function(error1, data){
            if(error1){return onErr(error); }
            pbook.showOne(data.name);
            promptMenu();
          });
          break;
        case 'c':
          prompt.get(['name', 'number'], function(error1, data){
            if(error1){return onErr(error); }
            pbook.add(data.name, data.number);
            promptMenu();
          });
          break;
        case 'd':
          prompt.get(['name'], function(error1, data){
            if(error1){return onErr(error); }
            pbook.remove(data.name);
            promptMenu();
          });
          break;
        case 'e':
          pbook.clear();
          console.log('All entries cleared.\n');
          promptMenu();
          break;
        default:
      }
    });
  }

  promptMenu();
});
