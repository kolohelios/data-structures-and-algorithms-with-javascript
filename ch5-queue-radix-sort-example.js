// Ch 5, Queues
'use strict';

// Radix sort W/queue example

function enqueue(element){
  this.dataStore.push(element);
}

function dequeue(){
  return this.dataStore.shift();
}

function front(){
  return this.dataStore[0];
}

function back(){
  return this.dataStore[this.dataStore.length - 1];
}

function toString(){
  var retStr = '';
  for(var p = 0; p < this.dataStore.length; p++){
    retStr += this.dataStore[p] + '\n';
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

function distribute(nums, queues, n, digit){
  for(var w = 0; w < n; w++){
    if(digit === 1){
      queues[nums[w] % 10].enqueue(nums[w]);
    }else{
      queues[Math.floor(nums[w] / 10)].enqueue(nums[w]);
    }
  }
}

function collect(queues, nums){
  var m = 0;
  for(var digit = 0; digit < 10; ++digit){
    while(!queues[digit].empty()){
      nums[m++] = queues[digit].dequeue();
    }
  }
}

function dispArray(arr){
  for(var r = 0; r < arr.length; ++r){
    console.log(arr[r] + ' ');
  }
}

var queues = [];
for(var i = 0; i < 10; ++i){
  queues[i] = new Queue();
}
var nums = [];
for(var j = 0; j < 10; ++j){
  nums[j] = Math.floor(Math.floor(Math.random() * 101));
}

console.log('Before radix sort: ');
dispArray(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log('\n\nAfter radix sort');
dispArray(nums);
