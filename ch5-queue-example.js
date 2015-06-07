// Ch 5, Queues
'use strict';

var fs = require('fs');

// Queue example

function enqueue(element){
  this.dataStore.push(element);
}

function dequeue(){
  return this.dataStore.shift();
}

function front(){
  return this.dataStore[0];
}

function back(){
  return this.dataStore[this.dataStore.length - 1];
}

function toString(){
  var retStr = '';
  for(var i = 0; i < this.dataStore.length; i++){
    retStr += this.dataStore[i] + '\n';
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

function Queue(){
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
  this.count = count;
}

// first queue test program

// var q = new Queue();
// q.enqueue('Meredith');
// q.enqueue('Cynthia');
// q.enqueue('Jennifer');
// console.log(q.toString());
// q.dequeue();
// console.log(q.toString());
// console.log('Front of queue: ' + q.front());
// console.log('Back of queue: ' + q.back());

// square dance example program
function Dancer(name, sex){
  this.name = name;
  this.sex = sex;
}

var maleDancers = new Queue();
var femaleDancers = new Queue();

function dance(males, females){
  console.log('The dance partners are: \n');
  while(!females.empty() && !males.empty()){
    var female = females.dequeue();
    var male = males.dequeue();
    console.log('female dancer is: ' + female.name + ' and male dancer is: ' + male.name);
  }
}

function getDancers(males, females){
  fs.readFile('ch5-square-dance.txt', 'utf8', function(err, data){
    if(err){console.log(err); }
    var records = data.trim().split('\n');
    for(var i = 0; i < records.length; i++){
      var dancer = records[i].split(' ');
      var sex = dancer[0];
      var name = dancer[1];
      if(sex === 'F'){
        females.enqueue(new Dancer(name, sex));
      }else{
        males.enqueue(new Dancer(name, sex));
      }
    }
    dance(maleDancers, femaleDancers);
    if(maleDancers.count() > 0){
      console.log('There are ' + maleDancers.count() + ' male dancers waiting to dance.');
    }
    if(femaleDancers.count() > 0){
      console.log('There are ' + femaleDancers.count() + ' female dancers waiting to dance.');
    }
    // show count or actual dancers?
    // if(!femaleDancers.empty()){
    //   console.log(femaleDancers.front().name + ' is waiting to dance.');
    // }
    // if(!maleDancers.empty()){
    //   console.log(maleDancers.front().name + ' is waiting to dance.');
    // }
  });
}

getDancers(maleDancers, femaleDancers);
