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
  const dxdy = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];

  const endingTreeCount = dxdy.map(([dx, dy]) => {
    const treeCount = solvePartTwo(0, 0, 0, dx, dy);
    console.log(`dx ${ dx } dy ${ dy }: ${ treeCount }`);
    return treeCount;
  }).reduce((a, b) => a * b);

  console.log("treeCount: " + endingTreeCount);
});

const solvePartTwo = (x, y, count, dx, dy) => {
  if (y >= input.length) return count;

  x = x % input[0].length;

  if (input[y][x] === "#") {
    count++;
  }

  return solvePartTwo(x + dx, y + dy, count, dx, dy);
}
