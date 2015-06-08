// Ch. 8 Hash Tables
'use strict';

// example of hash table

var HashTable = require('./ch8-hash-table');
// var prompt = require('prompt');


var someNames = ['David', 'Jennifer', 'Donnie', 'Raymond', 'Cynthia', 'Mike', 'Clayton', 'Danny', 'Jonathan'];
var hTable = new HashTable();
hTable.buildChains();
for(var i = 0; i < someNames.length; i++){
  hTable.put(someNames[i]);
}
hTable.showDistro();

// function getRandomInt(min, max){
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// function genStuData(arr){
//   for(var i = 0; i < arr.length; i++){
//     var num = '';
//     for(var j = 1; j <= 9; j++){
//       num += Math.floor(Math.random() * 10);
//     }
//     num += getRandomInt(50, 100);
//     arr[i] = num;
//   }
// }
//
// prompt.start();
//
// function onErr(err){
//   console.log(err);
//   return 1;
// }
//
// var pnumbers = new HashTable();
// var count = 0;
// function promptMenu(){
//   if(count < 3){
//     prompt.get(['name', 'number'], function(error, data){
//       count++;
//       if(error){
//         return onErr(error);
//       }else if(data.name === ' ' || data.number === ' '){
//         // meh
//       }else{
//         pnumbers.put(data.name, data.number);
//         promptMenu();
//       }
//     });
//   }else{
//     prompt.get(['name'], function(error, data){
//       if(error){
//         return onErr(error);
//       }else if(data.name === ' ' || data.number === ' '){
//         // meh
//       }else{
//         console.log(pnumbers.get(data.name));
//         promptMenu();
//       }
//     });
//   }
// }
//
// promptMenu();
