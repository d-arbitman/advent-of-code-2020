const lib = require('./day01.library.js');
const readline = require('readline');
const fs = require('fs');
let input = [];

const readInterface = readline.createInterface({
  input: fs.createReadStream('./day01/day01.input'),
  /*output: process.stdout,*/
  console: false,
});

readInterface.on('line', (line) => {
  input.push(parseInt(line));
}).on('close', () => {
  console.log('part 1: ' + lib.part1(input, 2020));
  console.log('part 1: ' + lib.part2(input, 2020));
});
