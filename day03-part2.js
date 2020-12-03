const readline = require('readline');
const fs = require('fs')
let input = [];

const readInterface = readline.createInterface({
    input: fs.createReadStream('./day03.input'),
    /*output: process.stdout,*/
    console: false
});

readInterface.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  function solvePartTwo(x, y, count, dx, dy) {
    if (y >= input.length) return count;

    x = x % input[0].length;

    if (input[y][x] === "#") {
      count++;
    }

    return solvePartTwo(x+dx, y+dy, count, dx, dy);
  }

  dxdy = [[1,1], [3,1], [5,1], [7,1], [1,2]];

  const treeCount = dxdy.map(([dx,dy]) => {
      const treeCount = solvePartTwo(0, 0, 0, dx, dy);
      console.log(`dx ${dx} dy ${dy}: ${treeCount}`);
      return treeCount;
  }).reduce((a,b) => a*b);

  console.log("treeCount: " + treeCount);
});
