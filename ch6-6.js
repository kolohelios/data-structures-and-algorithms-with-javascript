// Ch. 6 - Linked Lists
'use strict';

// 6. Josephus problem

function Node(element){
  this.element = element;
  this.next = 'head';
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
  while(!(currNode.next === 'head')){
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

function advance(n, pos){
  var currNode = this.find(pos);
  for(var i = 0; i < n; i++){
    console.log(currNode);
    currNode = currNode.next;
  }
  return currNode;
}

function back(n, pos){
  var currNode = this.find(pos);
  for(var i = 0; i < n; i++){
    if(currNode.element !== 'head'){
      currNode = this.findPrevious(currNode.element);
    }else{
      return -1;
    }
  }
  return currNode;
}

function LList(){
  this.head = new Node('head');
  this.find = find;
  this.insert = insert;
  this.findPrevious = findPrevious;
  this.advance = advance;
  this.back = back;
  this.remove = remove;
  this.display = display;
}

var soldiers = new LList();
soldiers.insert(0, 'head');
for(var j = 1; j < 40; j++){
  soldiers.insert(j, j - 1);
}

var soldier = {element: 'head'};
for(j = 0; j < 40; j++){
  soldier = soldiers.advance(3, soldier.element);
  console.log(soldier.element);
  soldiers.remove(soldier.element);
}
soldiers.display();
