// Stacks
'use strict';

// 1. check for unbalanced parentheses

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

var newExpression = new Stack();
function balancedParentheses(expressionToCheck){
  var foundParenLoc = -1;
  expressionToCheck.split('').forEach(function(char){
    newExpression.push(char);
    if(char === '(' || char === ')'){
      if(foundParenLoc > -1){
        foundParenLoc = -1;
      }else{
        foundParenLoc = newExpression.top;
      }
    }
  });
  newExpression.clear();
  if(foundParenLoc > -1){
    return foundParenLoc;
  }
  return true;
}

var expression = '2.3 + 23 / 12 + (3.14159 * .24';
console.log(balancedParentheses(expression));
expression = '(2 + 3) / 4';
console.log(balancedParentheses(expression));

