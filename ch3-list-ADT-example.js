// Lists
'use strict';

// list ADT

var fs = require('fs');

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

function displayList(list){
  for(list.front(); list.currPos() < list.length(); list.next()){
    if(list.getElement() instanceof Customer){
      console.log(list.getElement().name + ', ' +
      list.getElement().movie);
    }else{
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

var names = new List();
names.append('Clayton');
names.append('Raymond');
names.append('Cynthia');
names.append('Jennifer');
names.append('Bryan');
names.append('Danny');
names.front();
console.log(names.getElement());
names.next();
console.log(names.getElement());
names.next();
names.next();
names.prev();
console.log(names.getElement());
for(names.front(); names.currPos() < names.length(); names.next()){
  console.log(names.getElement());
}
for(names.end(); names.currPos() > 0; names.prev()){
  console.log(names.getElement());
}

var customers = new List();

function Customer(name, movie){
  this.name = name;
  this.movie = movie;
}

function checkOut(name, movie, filmList, customerList){
  if(filmList.contains(movie)){
    var c = new Customer(name, movie);
    customerList.append(c);
    filmList.remove(movie);
  }else{
    console.log(movie + ' is not available.');
  }
}

fs.readFile('ch3-films.txt', 'utf8', function(err, data){
  if(err){return console.log(err); }
  var movies = data.split('\n');
  for(var i = 0; i < movies.length; i++){
    movies[i] = movies[i].trim();
  }
  var movieList = new List();
  for(var j = 0; j < movies.length; j++){
    movieList.append(movies[j]);
  }
  console.log('Available movies: \n');
  displayList(movieList);
  var name = 'Joe';
  var movie = 'Forrest Gump';
  checkOut(name, movie, movieList, customers);
  console.log('\nCustomer Rentals: \n');
  displayList(customers);
  console.log('\nMovies Now Available\n');
  displayList(movieList);
});

