// Stacks
'use strict';

// 2. postfix expression evaluator

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

var operands = new Stack();
var operators = new Stack();

function pushInfixExpressionToStacks(expressionToPush, operatorStack, operandStack){
  expressionToPush.split('').forEach(function(char){
    if(char === '+' || char === '-' || char === '*' || char === '/'){
      operatorStack.push(char);
    }
    if(!(isNaN(char)) && char !== ' '){
      operandStack.push(char);
    }
  });
}

function evaluatePostfixStacks(expressionToEval, operatorStack, operandStack){
  var result = 0;
  var a, b = parseFloat(operandStack.pop());
  while(operandStack.length() > 0){
    a = parseFloat(operandStack.pop());
    switch(operatorStack.pop()){
      case '+':
        result += a + b;
        break;
      case '-':
        result += a - b;
        break;
      case '*':
        result += a * b;
        break;
      case '/':
        result += a / b;
    }
    b = a;
  }
  return result;
}

var expression = '2 + 3';
pushInfixExpressionToStacks(expression, operators, operands);
var postfixResult = evaluatePostfixStacks(expression, operators, operands);
console.log(postfixResult);
expression = '3 * 3 + 8';
pushInfixExpressionToStacks(expression, operators, operands);
postfixResult = evaluatePostfixStacks(expression, operators, operands);
console.log(postfixResult);
