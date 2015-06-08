// Ch. 6 - Linked Lists
'use strict';

var prompt = require('prompt');

// 4. singly-linked list design for test grades entered interactively

function Node(element){
  this.element = element;
  this.next = null;
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
  newNode.next = current.next;
  current.next = newNode;
}

function display(){
  var currNode = this.head;
  while(!(currNode.next === null)){
    console.log('Item: ', currNode.next.element.name, ' : Grade: ', currNode.next.element.grade);
    currNode = currNode.next;
  }
}

function findPrevious(item){
  var currNode = this.head;
  while(!(currNode.next === null) && (currNode.next.element.name !== item)){
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

function TestGrade(name, grade){
  this.name = name;
  this.grade = grade;
}

function LList(){
  this.head = new Node(new TestGrade('head', null));
  this.find = find;
  this.insert = insert;
  this.findPrevious = findPrevious;
  this.remove = remove;
  this.display = display;
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
  console.log('c. Show test grades');
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
      default:
    }
  });
}

promptMenu();
