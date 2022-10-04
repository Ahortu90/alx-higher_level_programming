#!/usr/bin/node
const count = process.argv.length;
console.log(count === 1 ? 'No argument');
console.log(count === 2 ? 'Argument found');
console.log('Arguments found');
