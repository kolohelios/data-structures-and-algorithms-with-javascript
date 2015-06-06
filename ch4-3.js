// Stacks
'use strict';

// 3. virtual Pez dispenser

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

var pezWrapper = new Stack();
var pezContents = ['red', 'white', 'yellow', 'white', 'yellow', 'red', 'yellow', 'yellow', 'white'];
pezContents.forEach(function(pez){
  pezWrapper.push(pez);
});

var pezDispenser = new Stack();

function fillPezDispenserWithoutAFlavor(color){
  console.log(pezWrapper.peek());
  while(pezWrapper.length() > 0){
    var pez = pezWrapper.pop();
    if(pez !== color){
      pezDispenser.push(pez);
    }
  }
}

fillPezDispenserWithoutAFlavor('yellow');
console.log('pezWrapper: ', pezWrapper.dataStore);
console.log('pezDispenser: ', pezDispenser.dataStore);
