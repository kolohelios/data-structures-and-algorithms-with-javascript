// Ch. 8 Hash Tables
'use strict';

// hash table

function simpleHash(data){
  var total = 0;
  for(var i = 0; i < data.length; i++){
    total += data.charCodeAt(i);
  }
  return total % this.table.length;
}

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
  data = data ? data : key;
  var pos = this.betterHash(key, this.table);
  var index = 0;
  while(this.table[pos][index]){
    index++;
  }
  this.table[pos][index] = data;
}

function showDistro(){
  // var n = 0;
  for(var i = 0; i < this.table.length; i++){
    if(this.table[i][0]){
      console.log(i + ': ' + this.table[i]);
    }
  }
}

function get(key){
  console.log(this.betterHash(key, this.table));
  return this.table[this.betterHash(key, this.table)];
}

function buildChains(){
  for(var i = 0; i < this.table.length; i++){
    this.table[i] = [];
  }
}

function HashTable(){
  this.table = new Array(181);
  this.simpleHash = simpleHash;
  this.betterHash = betterHash;
  this.showDistro = showDistro;
  this.buildChains = buildChains;
  this.put = put;
  this.get = get;
}

module.exports = HashTable;
