// Ch. 6 - Linked Lists
'use strict';

// example of object-based singly-linked list design

function Node(element){
  this.element = element;
  this.next = null;
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
  current.next = newNode;
}

function display(){
  var currNode = this.head;
  while(!(currNode.next === null)){
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
  var prevNode = this.findPrevious(item);
  if(!(prevNode.next === null)){
    prevNode.next = prevNode.next.next;
  }
}

function LList(){
  this.head = new Node('head');
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
