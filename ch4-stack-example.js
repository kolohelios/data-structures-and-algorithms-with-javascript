// Stacks
'use strict';

// Stack example

function push(element){
  this.dataStore[this.top++] = element;
}

function pop(){
  return this.dataStore[--this.top];
}

function peek(){
  return this.dataStore[this.top - 1];
}

function length(){
  return this.top;
}

function clear(){
  this.top = 0;
}

function Stack(){
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.length = length;
  this.clear = clear;
}

// var s = new Stack();
// s.push('David');
// s.push('Raymond');
// s.push('Bryan');
// console.log('length: ' + s.length());
// console.log(s.peek());
// var popped = s.pop();
// console.log('The popped element is: ' + popped);
// console.log(s.peek());
// s.push('Cynthia');
// console.log(s.peek());
// s.clear();
// console.log('length: ' + s.length());
// console.log(s.peek());
// s.push('Clayton');
// console.log(s.peek());

// function mulBase(num, base){
//   var s = new Stack();
//   do{
//     s.push(num % base);
//     num = Math.floor(num /= base);
//   }while(num > 0);
//   var converted = '';
//   while(s.length() > 0){
//     converted += s.pop();
//   }
//   return converted;
// }
//
// var num = 32;
// var base = 2;
// var newNum = mulBase(num, base);
// console.log(num + ' converted to base ' + base + ' is ' + newNum);
// num = 125;
// base = 8;
// newNum = mulBase(num, base);
// console.log(num + ' converted to base ' + base + ' is ' + newNum);

function isPalindrome(word){
  var s = new Stack();
  for(var i = 0; i < word.length; ++i){
    s.push(word[i]);
  }
  var rword = '';
  while(s.length() > 0){
    rword += s.pop();
  }
  if(word === rword){
    return true;
  }
  return false;
}

var word = 'hello';
if(isPalindrome(word)){
  console.log(word + ' is a palindrome.');
}else{
  console.log(word + ' is not a palindrome.');
}

word = 'racecar';
if(isPalindrome(word)){
  console.log(word + ' is a palindrome.');
}else{
  console.log(word + ' is not a palindrome.');
}

// example of recursion

function factorial(n){
  if(n === 0){
    return 1;
  }
  return n * factorial(n - 1);
}
function fact(n){
  var s = new Stack();
  while(n > 1){
    s.push(n--);
  }
  var product = 1;
  while(s.length() > 0){
    product *= s.pop();
  }
  return product;
}

// do some time tests to compare the direct recursive approach versus pushing onto a stack

console.time('a');
for(var i = 0; i < 10000000; i++){
  factorial(5);
}
console.timeEnd('a');

console.time('b');
for(var j = 0; j < 10000000; j++){
  fact(5);
}
console.timeEnd('b');

