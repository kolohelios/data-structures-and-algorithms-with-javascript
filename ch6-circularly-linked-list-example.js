// Ch. 6 - Linked Lists
'use strict';

// example of object-based circularly-linked list design

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
  newNode.next = current.next;
  newNode.previous = current;
  current.next = newNode;
}

function display(){
  var currNode = this.head;
  while(!(currNode.next === null) && !(currNode.next.element === 'head')){
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}

function findPrevious(item){
  var currNode = this.head;
  while(!(currNode.next === null) && (currNode.next.element !== item)){
    currNode = currNode.next;
  }
  return currNode;
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
  this.head.next = this.head;
  this.find = find;
  this.insert = insert;
  this.findPrevious = findPrevious;
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
cities.display();
