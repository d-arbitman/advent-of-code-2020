module.exports = (() => {
  let module = {};

  module.part1 = (input) => {
    input = input.split("\n").map(x => x.split(""));

    if (input[-1] === []) {
      input.pop();
    }

    let [layout, seatsChanged] = module.updateSeatsPart1(input);

    while (seatsChanged > 0) {
      [layout, seatsChanged] = module.updateSeatsPart1(layout);
    }

    return module.countInstancesOfCharacter(layout, '#');
  };

  module.updateSeatsPart1 = (input) => {
    let seatUpdateCount = 0;
    let newLayout = input.map(x => [...x]);

    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input[i].length; j++) {
        let neighbors = module.countNeighborsPart1(input, i, j);

        if (neighbors >= 4 && input[i][j] === '#') {
          seatUpdateCount++;
          newLayout[i][j] = 'L';
        } else if (neighbors === 0 && input[i][j] === 'L') {
          seatUpdateCount++;
          newLayout[i][j] = '#';
        }
      }
    }

    return [newLayout, seatUpdateCount];
  };

  module.countNeighborsPart1 = (input, x, y) => {
    let count = 0;

    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (!module.isValidSeat(input, x + i, y + j) || (i === 0 && j === 0)) {
          continue;
        }

        if (input[x + i][y + j] === '#') {
          count++;
        }
      }
    }

    return count;
  };

  module.countInstancesOfCharacter = (arr, charToCount) => {
    let count = 0;
    let str = arr.join("\n").replace(/,/g, "");

    for (let i = 0; i < str.length; i++) {
      if (str[i] === charToCount) {
        count++;
      }
    }

    return count;
  };

  module.part2 = (input) => {
    input = input.split("\n").map(x => x.split(""));

    if (input[-1] === []) {
      input.pop();
    }

    let [layout, seatsChanged] = module.updateSeatsPart2(input);

    while (seatsChanged > 0) {
      [layout, seatsChanged] = module.updateSeatsPart2(layout);
    }

    return module.countInstancesOfCharacter(layout, '#');
  };

  module.updateSeatsPart2 = (input) => {
    let seatUpdateCount = 0;
    let newLayout = input.map(x => [...x]);

    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input[i].length; j++) {
        let neighbors = module.countNeighborsPart2(input, i, j);

        if (neighbors >= 5 && input[i][j] === '#') {
          seatUpdateCount++;
          newLayout[i][j] = 'L';
        } else if (neighbors === 0 && input[i][j] === 'L') {
          seatUpdateCount++;
          newLayout[i][j] = '#';
        }
      }
    }

    return [newLayout, seatUpdateCount];
  };

  module.isValidSeat = (input, x, y) => {
    return x >= 0 && y >= 0 && x < input.length && y < input[x].length;
  };

  module.countNeighborsPart2 = (input, x, y) => {
    let neighbors = [];
    let directions = [[-1, 1], [-1, 0], [-1, -1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];

    for (let i = 0; i < directions.length; i++) {
      neighbors.push(module.findFirstSeat(input, x, y, directions[i][0], directions[i][1]));
    }

    return neighbors.filter(n => n === '#').length;
  };

  module.findFirstSeat = (input, x, y, i, j) => {
    x += i;
    y += j;

    while (module.isValidSeat(input, x, y)) {
      if (input[x][y] === '#' || input[x][y] === 'L') {
        return input[x][y];
      }

      x += i;
      y += j;
    }

    return null;
  };

  return module;
})();
