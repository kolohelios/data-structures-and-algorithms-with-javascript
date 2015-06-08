// Ch. 8 Hash Tables
'use strict';

// 1. use separate chaining to create a simple dictionary of words which the
// user will be able to access entires from

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

function buildChains(arrLength){
  for(var i = 0; i < arrLength; i++){
    this.table[i] = [];
  }
}

function put(key, data){
  var pos = this.betterHash(key, this.table);
  var index = 0;
  while(this.table[pos][index]){
    index++;
  }
  this.table[pos][index] = data;
}

function showDistro(){
  for(var i = 0; i < this.table.length; i++){
    if(this.table[i]){
      console.log(this.table[i].word + ': ' + this.table[i].def);
    }
  }
}

function get(key){
  var pos = this.betterHash(key, this.table);
  var index = 0;
  while(this.table[pos][index].word !== key){
    index++;
  }
  return this.table[this.betterHash(key, this.table)][index];
}

function DictEntry(word, def){
  this.word = word;
  this.def = def;
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

var dictionary = new HashTable();
dictionary.buildChains(dictionary.table.length);
var word = 'cat';
var def = 'The domestic cat[1][2] (Felis catus or Felis silvestris catus)[2][4] is a small, usually furry, domesticated, and carnivorous mammal.';
dictionary.put(word, new DictEntry(word, def));
word = 'dog';
def = 'The domestic dog (Canis lupus familiaris or Canis familiaris) is a domesticated canid which has been selectively bred for millennia for various behaviors, sensory capabilities, and physical attributes.';
dictionary.put(word, new DictEntry(word, def));
word = 'mouse';
def = 'A mouse (plural: mice) is a small mammal belonging to the order of rodents, characteristically having a pointed snout, small rounded ears, a body-length scaly tail and a high breeding rate.';
dictionary.put(word, new DictEntry(word, def));
word = 'bird';
def = 'Birds (class Aves and clade Avialae) are highly advanced theropod dinosaurs.';
dictionary.put(word, new DictEntry(word, def));
word = 'zebra';
def = 'The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas, woodlands, thorny scrublands, mountains, and coastal hills.';
dictionary.put(word, new DictEntry(word, def));
console.log(dictionary.get('bird'));
