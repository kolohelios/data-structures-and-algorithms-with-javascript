// Ch. 8 Hash Tables
'use strict';

// 3. read a text file and compile a list of word frequency

var fs = require('fs');

function betterHash(string, arr){
  var H = 37;
  var total = 0;
  for(var i = 0; i < string.length; i++){
    total += H * total + string.charCodeAt(i);
  }
  total %= arr.length;
  return parseInt(total, 10);
}

function put(key, data){
  var pos = this.betterHash(key, this.table);
  this.table[pos] = data;
}

function showDistro(){
  for(var i = 0; i < this.table.length; i++){
    if(this.table[i]){
      console.log(this.table[i].word + ' : ' + this.table[i].count);
    }
  }
}

function get(key){
  var pos = this.betterHash(key, this.table);
  if(this.table[pos]){
    return this.table[this.betterHash(key, this.table)];
  }
  return -1;
}

function WordEntry(word, count){
  this.word = word;
  this.count = count;
}

function HashTable(){
  this.table = new Array(181);
  this.betterHash = betterHash;
  this.showDistro = showDistro;
  this.put = put;
  this.get = get;
}

var wordList = new HashTable();
fs.readFile('ch8-3-text.txt', 'utf8', function(err, data){
  if(err){console.log(err); }
  var words = data.trim().toLowerCase().split(' ');
  words.forEach(function(word){
    word = word.match(/[a-z]/gi);
    word = word.join('');
    var count = 1;
    if(wordList.get(word) !== -1){
      var temp = wordList.get(word);
      count = temp.count + 1;
    }
    wordList.put(word, new WordEntry(word, count));
  });
  wordList.showDistro();
});
