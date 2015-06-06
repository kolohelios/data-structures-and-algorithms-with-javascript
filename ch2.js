// Arrays
'use strict';

// 1.
function Grades(name){
  this.name = name;
  this.grades = [];
  this.addGrade = function(grade){
    this.grades.push(grade);
  };
  this.average = function(){
    var sum = this.grades.reduce(function(a, b){
      return a + b;
    });
    console.log(sum / this.grades.length);
  };
}
var student1 = new Grades('Joe');
student1.addGrade(95);
student1.addGrade(85);
student1.average();

// 2.
var words = ['cow', 'milk', 'carrots', 'sesame', 'farm'];
console.log(words);
console.log(words.reverse());

// 3.
function MonthTemps(weeks){
  this.dataStore = [];
  for(var i = 0; i < weeks; i++){
    this.dataStore.push([]);
  }
  this.addTemps = function addTemps(weekNum, temp){
    this.dataStore[weekNum - 1].push(temp);
  };
  this.weekAverage = function weekAverage(weekNum){
    var sum = this.dataStore[weekNum - 1].reduce(function(a, b){
      return a + b;
    });
    var average = sum / this.dataStore[weekNum - 1].length;
    return average;
  };
  this.averageForWeeks = function averageForWeeks(){
    var total = 0;
    for(var j = 1; j < this.dataStore.length; j++){
      total += this.weekAverage(j);
    }
    console.log('Average temp for weeks: ' + (total / this.dataStore.length).toFixed(2));
  };
  this.monthlyAverage = function monthlyAverage(){
    var count = 0, total = 0;
    this.dataStore.forEach(function(week){
      week.forEach(function(day){
        count++;
        total += day;
      });
    });
    console.log('Average temp for month: ' + (total / count).toFixed(2));
  };
}

var january = new MonthTemps(4);
january.addTemps(1, 23);
january.addTemps(1, 26);
january.addTemps(2, 26);
january.addTemps(3, 26);
january.addTemps(4, 26);
january.addTemps(4, 25);
console.log('Average temp for week 1: ' + january.weekAverage(1).toFixed(2));
january.monthlyAverage();
january.averageForWeeks();

// 4.
function Letters(){
  this.letterCollection = [];
  this.addLetter = function(letter){
    this.letterCollection.push(letter);
  };
  this.displayWord = function(){
    console.log(this.letterCollection.join(''));
  };
}
var letters = new Letters();
letters.addLetter('h');
letters.addLetter('e');
letters.addLetter('l');
letters.addLetter('l');
letters.addLetter('o');
letters.displayWord();
