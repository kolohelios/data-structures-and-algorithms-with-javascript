// Ch 5, Queues
'use strict';

var prompt = require('prompt');

// 4. add menu to ED/priority queue example

function enqueue(element){
  this.dataStore.push(element);
}

function dequeue(){
  if(this.dataStore.length < 1){
    return false;
  }
  var record, priority = this.dataStore[0].code;
  for(var i = 1; i < this.dataStore.length; ++i){
    if(this.dataStore[i].code > priority){
      record = i;
    }
  }
  return this.dataStore.splice(record, 1);
}

function front(){
  return this.dataStore[0];
}

function back(){
  return this.dataStore[this.dataStore.length - 1];
}

function toString(){
  var retStr = '';
  for(var z = 0; z < this.dataStore.length; z++){
    retStr += this.dataStore[z].name + ', code ' + this.dataStore[z].code + '\n';
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

function Patient(name, code){
  this.name = name;
  this.code = code;
}

function onErr(err){
  console.log(err);
  return 1;
}

prompt.start();

var ed = new Queue();
var p = new Patient('Smith', 5);
ed.enqueue(p);
p = new Patient('Jones', 4);
ed.enqueue(p);
p = new Patient('Fehrenbach', 3);
ed.enqueue(p);
p = new Patient('Brown', 2);
ed.enqueue(p);
p = new Patient('Ingram', 1);
ed.enqueue(p);
console.log(ed.toString());

var menuChoice;
function promptMenu(){
  console.log('Enter one of the following options:');
  console.log('a. Admit patient');
  console.log('b. Process patient');
  console.log('c. Display list of patients waiting to be seen');
  console.log();
  prompt.get(['command'], function(err, result){
    if(err){return onErr(err); }
    menuChoice = result.command;
    switch(menuChoice){
      case 'a':
        prompt.get(['name', 'code'], function(error, data){
          if(error){return onErr(err); }
          p = new Patient(data.name, data.code);
          ed.enqueue(p);
          promptMenu();
        });
        break;
      case 'b':
        var seen = ed.dequeue();
        if(!seen){
          console.log('There are no more patients to be seen. Hurray!');
          console.log();
        }else{
          console.log('Patient being treated: ', seen[0].name);
          console.log();
        }
        promptMenu();
        break;
      case 'c':
        console.log('Patients waiting to be seen: ');
        console.log(ed.toString());
        promptMenu();
        break;
      default:
    }
  });
}

promptMenu();
