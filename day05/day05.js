const readline = require('readline');
const fs = require('fs');
let input = [];

const readInterface = readline.createInterface({
  input: fs.createReadStream('./day05.input'),
  /*output: process.stdout,*/
  console: false,
});


readInterface.on('line', (line) => {
  input.push(line);
}).on('close', () => {
  let seats = [];
  let maxSeatId = 0;
  let minSeatId = 1000;
  const numberOfRows = 127;
  const numberOfColumns = 8

  for (let i = 0; i < input.length; i++) {
    const [row, col] = calculateSeatPosition(input[i]);

    seats.push(parseInt(row * 8 + col));
    if (row * 8 + col > maxSeatId) {
      maxSeatId = row * 8 + col;
    } else if (row * 8 + col < minSeatId) {
      minSeatId = row * 8 + col;
    }
  }

  seats = seats.sort((a, b) => a - b);

  seats
    .filter((seatId, i, rows) => rows[i + 1] && rows[i + 1] === seatId + 2)
    .map(i => console.log('my seat: ' + (i + 1)));
  console.log("minSeatIds: " + seats.slice(0, 5).join(', '));
  console.log("maxSeatIds: " + seats.slice(seats.length - 5, seats.length).join(', '));
});

const calculateSeatPosition = (boardingPass) => {
  let minRow = 0;
  let maxRow = 127;
  let minCol = 0;
  let maxCol = 7
  for (let i = 0; i < 7; i++) {
    const halfWayPoint = Math.ceil((maxRow - minRow) / 2);

    if (boardingPass[i] === 'F') {
      maxRow -= halfWayPoint;
    } else {
      minRow += halfWayPoint;
    }
  }

  for (let i = 7; i < 10; i++) {
    const halfWayPoint = Math.ceil((maxCol - minCol) / 2);
    if (boardingPass[i] === 'L') {
      maxCol -= halfWayPoint;
    } else {
      minCol += halfWayPoint;
    }
  }

  return [maxRow, maxCol];
}
