// Lists
'use strict';

// 3.

function append(element){
  this.dataStore[this.listSize++] = element;
}

function find(element){
  for(var i = 0; i < this.dataStore.length; i++){
    if(this.dataStore[i] === element){
      return i;
    }
  }
  return -1;
}

function remove(element){
  var foundAt = this.find(element);
  if(foundAt > -1){
    this.dataStore.splice(foundAt, 1);
    this.listSize--;
    return true;
  }
  return false;
}

function length(){
  return this.listSize;
}

function toString(){
  return this.dataStore;
}

function insert(element, after){
  var insertPos = this.find(after);
  if(insertPos > -1){
    this.dataStore.splice(insertPos + 1, 0, element);
    this.listSize++;
    return true;
  }
  return false;
}

function clear(){
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

function contains(element){
  for(var i = 0; i < this.dataStore.length; i++){
    if(this.dataStore[i] === element){
      return true;
    }
  }
  return false;
}

function front(){
  this.pos = 0;
}

function end(){
  this.pos = this.listSize - 1;
}

function prev(){
  if(this.pos > 0){
    this.pos--;
  }
}

function next(){
  if(this.pos < this.listSize){
    this.pos++;
  }
}

function currPos(){
  return this.pos;
}

function moveTo(position){
  this.pos = position;
}

function getElement(){
  return this.dataStore[this.pos];
}

function Person(name, gender){
  this.name = name;
  this.gender = gender;
}

function displayList(list, gender){
  for(list.front(); list.currPos() < list.length(); list.next()){
    if(list.getElement() instanceof Person && list.getElement().gender === gender){
      console.log(list.getElement().name + ', '
      + list.getElement().gender);
    }else if(!(list.getElement() instanceof Person)){
      console.log(list.getElement());
    }
  }
}

function List(){
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.length = length;
  this.contains = contains;
  this.displayList = displayList;
}

var people = new List();

people.append(new Person('Jon', 'male'));
people.append(new Person('Jessica', 'female'));
people.append(new Person('Sarah', 'female'));
people.append(new Person('Mike', 'male'));
people.append(new Person('Jet', 'male'));
people.append(new Person('Bella', 'female'));
people.append(new Person('Splash', 'female'));
people.append(new Person('Bob', 'male'));
people.append(new Person('Sam', 'male'));
people.append(new Person('Tina', 'female'));
people.append(new Person('Justin', 'male'));
people.append(new Person('Ann', 'female'));
people.displayList(people, 'female');
