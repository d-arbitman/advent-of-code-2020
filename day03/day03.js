const readline = require('readline');
const fs = require('fs');
let input = [];

const readInterface = readline.createInterface({
  input: fs.createReadStream('./day03.input'),
  /*output: process.stdout,*/
  console: false,
});

readInterface.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let treeCount = 0;
  let horizontalPosition = 0;

  for (let i = 0; i < input.length; i++) {
    treeCount += countCharacterInstances(input[i].substring(horizontalPosition % input[i].length + 1, horizontalPosition + 4), '#');
    horizontalPosition = (horizontalPosition + 4) % input[i].length;
  }

  console.log("treeCount: " + treeCount);
});

const countCharacterInstances = (str, c) => {
  let instances = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === c) {
      instances++;
    }
  }

  return instances;
};
