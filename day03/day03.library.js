module.exports = function() {
  let module = {};

  module.part1 = (input) => {
    let treeCount = 0;
    let horizontalPosition = 0;

    for (let i = 0; i < input.length; i++) {
      treeCount += module.countCharacterInstances(input[i].substring(horizontalPosition % input[i].length + 1, horizontalPosition + 4), '#');
      horizontalPosition = (horizontalPosition + 4) % input[i].length;
    }

    return treeCount;
  };

  module.part2 = (input) => {
    const dxdy = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];

    return dxdy.map(([dx, dy]) => {
      return module.countTrees(input, 0, 0, 0, dx, dy);
    }).reduce((a, b) => a * b);
  };

  module.countCharacterInstances = (str, c) => {
    let instances = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === c) {
        instances++;
      }
    }

    return instances;
  };

  module.countTrees = (input, x, y, count, dx, dy) => {
    if (y >= input.length) {
      return count;
    }

    x = x % input[0].length;

    if (input[y][x] === "#") {
      count++;
    }

    return module.countTrees(input, x + dx, y + dy, count, dx, dy);
  }

  return module;
}();
