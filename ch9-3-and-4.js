// Chapter 9 - Sets

'use strict';

// 3. extend the Set class with a function 'higher(element)' that returns the
// least element in the set greater than the given element
// and 4. a 'lower(element)' that returns the greatest element in the set that is
// less than the given element

function add(data){
  if(this.dataStore.indexOf(data) < 0){
    this.dataStore.push(data);
    this.dataStore.sort();
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
function higher(data){
  var least;
  set.dataStore.forEach(function(member){
    if(member > data){
      if(least ? member < least : member){
        least = member;
      }
    }
  });
  return least || -1;
}

function lower(data){
  var most;
  set.dataStore.forEach(function(member){
    if(member < data){
      if(most ? member > most : member){
        most = member;
      }
    }
  });
  return most || -1;
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
  this.higher = higher;
  this.lower = lower;
  this.show = show;
}

var set = new Set();
set.add(3);
set.add(7);
set.add(8);
console.log(set.higher(6));
console.log(set.lower(10));
