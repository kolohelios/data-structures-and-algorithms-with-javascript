// Ch. 7 - Dictionaries
'use strict';

// example of dictionary

function add(key, value){
  this.dataStore[key] = value;
}

function find(key){
  return this.dataStore[key];
}

function remove(key){
  delete this.dataStore[key];
}

function showAll(){
  var sortedKeys = Object.keys(this.dataStore).sort();
  for(var i = 0; i < sortedKeys.length; i++){
    console.log(sortedKeys[i] + ' -> ' + this.dataStore[sortedKeys[i]]);
  }
}

function showOne(key){
  console.log(key + ' -> ' + this.dataStore[key]);
  console.log();
}

function count(){
  var n = 0;
  for(var key in this.dataStore){
    n++;
  }
  return n;
}

function clear(){
  for(var key in this.dataStore){
    delete this.dataStore[key];
  }
}

function Dictionary(){
  this.dataStore = [];
  this.add = add;
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
  this.showOne = showOne;
  this.count = count;
  this.clear = clear;
}

module.exports = Dictionary;
