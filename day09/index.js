const lib = require('./day09.library.js');
const readline = require('readline');
const fs = require('fs');
let input = [];

const readInterface = readline.createInterface({
  input: fs.createReadStream('./day09/day09.input'),
  /*output: process.stdout,*/
  console: false,
});


readInterface.on('line', (line) => {
  input.push(parseInt(line));
}).on('close', () => {
  let part1 = lib.part1(input, 25);
  let index = input.indexOf(part1);
  console.log("part 1: " + part1);
  console.log("part 2: ", lib.part2(input, index));
});
