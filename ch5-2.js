// Ch 5, Queues
'use strict';

// 2. use Deque class to determine if a word is a palindrome

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

var word = 'hannah';
var wordReverse = new Deque();
for(var i = 0; i < word.length; i++){
  wordReverse.enqueueFront(word[i]);
}
var wordForward = new Deque();
for(i = 0; i < word.length; i++){
  wordForward.enqueueBack(word[i]);
}
var isPalindrome = true;
for(i = 0; i < word.length; i++){
  if(wordReverse.dequeueBack() !== wordForward.dequeueBack()){
    isPalindrome = false;
  }
}
if(isPalindrome){
  console.log(word + ' is a palindrome.');
}else{
  console.log(word + ' is not a palindrome.');
}

var word = 'hello';
var wordReverse = new Deque();
for(var i = 0; i < word.length; i++){
  wordReverse.enqueueFront(word[i]);
}
var wordForward = new Deque();
for(i = 0; i < word.length; i++){
  wordForward.enqueueBack(word[i]);
}
var isPalindrome = true;
for(i = 0; i < word.length; i++){
  if(wordReverse.dequeueBack() !== wordForward.dequeueBack()){
    isPalindrome = false;
  }
}
if(isPalindrome){
  console.log(word + ' is a palindrome.');
}else{
  console.log(word + ' is not a palindrome.');
}
