const lib = require('./day16.library.js');
const readline = require('readline');
const fs = require('fs');
let input = '';

const readInterface = readline.createInterface({
  input: fs.createReadStream('./day16/day16.input'),
  /*output: process.stdout,*/
  console: false,
});

readInterface.on('line', (line) => {
  input += line + "\n";
}).on('close', () => {
  console.log("part 1: ", lib.part1(input));

  input = "class: 1-3 or 5-7\n" +
      "row: 6-11 or 33-44\n" +
      "seat: 13-40 or 45-50\n" +
      "\n" +
      "your ticket:\n" +
      "7,1,14\n" +
      "\n" +
      "nearby tickets:\n" +
      "7,3,47\n" +
      "40,4,50\n" +
      "55,2,20\n" +
      "38,6,12";
  console.log("part 2: ", lib.part2(input));
});
