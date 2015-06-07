// Ch 5, Queues
'use strict';

// 1. Deque class

function enqueueFront(element){
  this.dataStore.unshift(element);
}
function enqueueBack(element){
  this.dataStore.push(element);
}

function dequeueFront(){
  return this.dataStore.shift();
}

function dequeueBack(){
  return this.dataStore.pop();
}

function front(){
  return this.dataStore[0];
}

function back(){
  return this.dataStore[this.dataStore.length - 1];
}

function toString(){
  var retStr = '';
  for(var p = 0; p < this.dataStore.length; p++){
    retStr += this.dataStore[p] + '\n';
  }
  return retStr;
}

function empty(){
  if(this.dataStore.length === 0){
    return true;
  }
  return false;
}

function count(){
  return this.dataStore.length;
}

function Deque(){
  this.dataStore = [];
  this.enqueueFront = enqueueFront;
  this.enqueueBack = enqueueBack;
  this.dequeueFront = dequeueFront;
  this.dequeueBack = dequeueBack;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
  this.count = count;
}

var zombies = new Deque();
zombies.enqueueFront('Leroy');
zombies.enqueueFront('Bob');
zombies.enqueueFront('Zef');
console.log(zombies.toString());
zombies.dequeueBack();
zombies.enqueueBack('Tex');
zombies.enqueueBack('Buster');
zombies.enqueueFront('Biff');
console.log(zombies.toString());
