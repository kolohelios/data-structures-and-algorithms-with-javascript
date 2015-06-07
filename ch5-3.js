// Ch 5, Queues
'use strict';

// 3. modify priority queue so that higher priority numbers have higher priority instead of lower numbers

function enqueue(element){
  this.dataStore.push(element);
}

function dequeue(){
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
    retStr += this.dataStore[z].name + ' code: ' + this.dataStore[z].code + '\n';
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

var p = new Patient('Smith', 3);
var ed = new Queue();
ed.enqueue(p);
p = new Patient('Jones', 4);
ed.enqueue(p);
p = new Patient('Fehrenbach', 6);
ed.enqueue(p);
p = new Patient('Brown', 1);
ed.enqueue(p);
p = new Patient('Ingram', 1);
ed.enqueue(p);
console.log(ed.toString());
var seen = ed.dequeue();
console.log('Patient being treated: ' + seen[0].name);
console.log('Patients waiting to be seen: ');
console.log(ed.toString());

seen = ed.dequeue();
console.log('Patient being treated: ' + seen[0].name);
console.log('Patients waiting to be seen: ');
console.log(ed.toString());
seen = ed.dequeue();
console.log('Patient being treated: ' + seen[0].name);
console.log('Patients waiting to be seen: ');
console.log(ed.toString());
