// Ch. 6 - Linked Lists
'use strict';

var prompt = require('prompt');

// 5. doubly-linked list design for test grades entered interactively

function Node(element){
  this.element = element;
  this.next = null;
  this.prev = null;
}

function find(item){
  var currNode = this.head;
  while(currNode.element.name !== item){
    currNode = currNode.next;
  }
  return currNode;
}

function insert(newElement, item){
  var newNode = new Node(newElement);
  var current = this.find(item);
  if(current.next !== null){current.next.prev = newNode; }
  newNode.next = current.next;
  newNode.prev = current;
  current.next = newNode;
}

function display(){
  var currNode = this.head;
  while(!(currNode.next === null)){
    console.log('Item: ', currNode.next.element.name, ' : Grade: ', currNode.next.element.grade);
    currNode = currNode.next;
  }
}

function findEnd(){
  var currNode = this.head;
  while(currNode.next !== null){
    currNode = currNode.next;
  }
  return currNode;
}

function dispReverse(){
  var currNode = this.head;
  currNode = this.findEnd();
  while(!(currNode.prev === null)){
    console.log('Item: ', currNode.element.name, ' : Grade: ', currNode.element.grade);
    currNode = currNode.prev;
  }
}

function remove(item){
  var currNode = this.find(item);
  if(!(currNode.next === null)){
    currNode.prev.next = currNode.next;
    currNode.next.prev = currNode.prev;
    currNode.next = null;
    currNode.prev = null;
  }
}

function TestGrade(name, grade){
  this.name = name;
  this.grade = grade;
}

function LList(){
  this.head = new Node(new TestGrade('head', null));
  this.find = find;
  this.insert = insert;
  this.remove = remove;
  this.display = display;
  this.findEnd = findEnd;
  this.dispReverse = dispReverse;
}

function onErr(err){
  console.log(err);
  return 1;
}

prompt.start();

var testGrades = new LList();
var g = new TestGrade('chapter 1', 95);
testGrades.insert(g, 'head');
g = new TestGrade('chapter 2', 85);
testGrades.insert(g, 'chapter 1');

var menuChoice;
function promptMenu(){
  console.log('Enter one of the following options:');
  console.log('a. Add a test grade');
  console.log('b. Remove a test grade');
  console.log('c. List test grades descending');
  console.log('d. List test grades ascending');
  console.log();
  prompt.get(['command'], function(err, result){
    if(err){return onErr(err); }
    menuChoice = result.command;
    switch(menuChoice){
      case 'a':
        prompt.get(['name', 'grade', 'insertAfter'], function(error, data){
          if(error){return onErr(error); }
          g = new TestGrade(data.name, data.grade);
          testGrades.insert(g, data.insertAfter);
          promptMenu();
        });
        break;
      case 'b':
        prompt.get(['name'], function(error, data){
          if(error){return onErr(error); }
          testGrades.remove(data.name);
          promptMenu();
        });
        break;
      case 'c':
        testGrades.display();
        console.log();
        promptMenu();
        break;
      case 'd':
        testGrades.dispReverse();
        console.log();
        promptMenu();
        break;
      default:
    }
  });
}

promptMenu();
