// Ch. 6 - Linked Lists
'use strict';

// example of object-based doubly-linked list design

function Node(element){
  this.element = element;
  this.next = null;
  this.previous = null;
}

function find(item){
  var currNode = this.head;
  while(currNode.element !== item){
    currNode = currNode.next;
  }
  return currNode;
}

function insert(newElement, item){
  var newNode = new Node(newElement);
  var current = this.find(item);
  if(current.next !== null){current.next.previous = newNode; }
  newNode.next = current.next;
  newNode.previous = current;
  current.next = newNode;
}

function display(){
  var currNode = this.head;
  while(!(currNode.next === null)){
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}

function findLast(){
  var currNode = this.head;
  while(!(currNode.next === null)){
    currNode = currNode.next;
  }
  return currNode;
}

function dispReverse(){
  var currNode = this.head;
  currNode = this.findLast();
  while(!(currNode.previous === null)){
    console.log(currNode.element);
    currNode = currNode.previous;
  }
}

function remove(item){
  var currNode = this.find(item);
  if(!(currNode.next === null)){
    currNode.previous.next = currNode.next;
    currNode.next.previous = currNode.previous;
    currNode.next = null;
    currNode.previous = null;
  }
}

function LList(){
  this.head = new Node('head');
  this.find = find;
  this.insert = insert;
  this.findLast = findLast;
  this.dispReverse = dispReverse;
  this.remove = remove;
  this.display = display;
}


var cities = new LList();
cities.insert('Conway', 'head');
cities.insert('Russellville', 'Conway');
cities.insert('Carlisle', 'Russellville');
cities.insert('Alma', 'Carlisle');
cities.display();
console.log();
cities.remove('Carlisle');
cities.insert('Sneakyville', 'Russellville');
cities.insert('Detroit', 'Sneakyville');
cities.display();
console.log();
cities.dispReverse();
