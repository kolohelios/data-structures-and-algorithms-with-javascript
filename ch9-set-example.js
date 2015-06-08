// Chapter 9 - Sets

'use strict';

// example of set

function add(data){
  if(this.dataStore.indexOf(data) < 0){
    this.dataStore.push(data);
    return true;
  }
  return false;
}

function remove(data){
  var pos = this.dataStore.indexOf(data);
  if(pos > -1){
    this.dataStore.splice(pos, 1);
    return true;
  }
  return false;
}

function show(){
  return this.dataStore;
}

function contains(data){
  if(this.dataStore.indexOf(data) > -1){
    return true;
  }
  return false;
}

function union(set){
  var tempSet = new Set();
  for(var i = 0; i < this.dataStore.length; i++){
    tempSet.add(this.dataStore[i]);
  }
  for(var j = 0; j < set.dataStore.length; j++){
    if(!tempSet.contains(set.dataStore[j])){
      tempSet.dataStore.push(set.dataStore[j]);
    }
  }
  return tempSet;
}

function intersect(set){
  var tempSet = new Set();
  for(var i = 0; i < this.dataStore.length; i++){
    if(set.contains(this.dataStore[i])){
      tempSet.add(this.dataStore[i]);
    }
  }
  return tempSet;
}

function size(){
  return this.dataStore.length;
}

function subset(set){
  if(this.size() > set.size()){
    return false;
  }
  this.dataStore.forEach(function(member){
    if(!set.contains(member)){
      return false;
    }
  });
  return true;
}

function difference(set){
  var tempSet = new Set();
  for(var i = 0; i < this.dataStore.length; i++){
    if(!set.contains(this.dataStore[i])){
      tempSet.add(this.dataStore[i]);
    }
  }
  return tempSet;
}

function Set(){
  this.dataStore = [];
  this.add = add;
  this.remove = remove;
  this.size = size;
  this.union = union;
  this.contains = contains;
  this.intersect = intersect;
  this.subset = subset;
  this.difference = difference;
  this.show = show;
}

// var names = new Set();
// names.add('David');
// names.add('Jennifer');
// names.add('Cynthia');
// names.add('Mike');
// names.add('Raymond');
// if(names.add('Mike')){
//   console.log('Mike added.');
// }else{
//   console.log('Can\'t add Mike, must already be in the set.');
// }
// console.log(names.show());
// var removed = 'Mike';
// if(names.remove(removed)){
//   console.log(removed + ' removed.');
// }else{
//   console.log(removed + ' not removed.');
// }
// names.add('Clayton');
// console.log(names.show());
// removed = 'Alisa';
// if(names.remove(removed)){
//   console.log(removed + ' removed.');
// }else{
//   console.log(removed + ' not removed.');
// }
//
// var cis = new Set();
// cis.add('Mike');
// cis.add('Clayton');
// cis.add('Jennifer');
// cis.add('Raymond');
// var dmp = new Set();
// dmp.add('Raymond');
// dmp.add('Cynthia');
// dmp.add('Jonathan');
// var it = new Set();
// it = cis.union(dmp);
// console.log(it.show());

// var cis = new Set();
// cis.add('Mike');
// cis.add('Clayton');
// cis.add('Jennifer');
// cis.add('Raymond');
// var dmp = new Set();
// dmp.add('Raymond');
// dmp.add('Cynthia');
// dmp.add('Bryan');
// var inter = cis.intersect(dmp);
// console.log(inter.show());

// var it = new Set();
// it.add('Cynthia');
// it.add('Clayton');
// it.add('Jennifer');
// it.add('Danny');
// it.add('Jonathan');
// it.add('Terrill');
// it.add('Raymond');
// it.add('Mike');
// var dmp = new Set();
// dmp.add('Cynthia');
// dmp.add('Raymond');
// dmp.add('Jonathan');
// if(dmp.subset(it)){
//   console.log('DMP is a subset of IT.');
// }else{
//   console.log('DMP is not a subset of IT.');
// }

var cis = new Set();
var it = new Set();
cis.add('Clayton');
cis.add('Jennifer');
cis.add('Danny');
it.add('Bryan');
it.add('Clayton');
it.add('Jennifer');
var diff = new Set();
diff = cis.difference(it);
console.log('[' + cis.show() + '] difference [' + it.show() + '] -> [' + diff.show() + ']');
