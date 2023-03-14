#!/usr/bin/node
/*const args = process.argv;

if (args[2]) {
  console.log(args[2];
} else {
  console.log('No argument');
}*/
console.log(typeof process.argv[2] === 'undefined' ? 'No argument' : process.argv[2]);
