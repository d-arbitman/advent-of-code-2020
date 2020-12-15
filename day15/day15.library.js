module.exports = (() => {
  let module = {};

  module.part1 = (input) => {
    return module.findTurnNumber(2020, input);
  };

  module.findTurnNumber = (turnNumber, input) => {
    const startingNumbers = input;
    const numbersSeen = new Map();
    let lastSeen = null;

    for (let count = 0; count < turnNumber; count++) {
      if (count < startingNumbers.length) {
        if (lastSeen !== null) {
          numbersSeen.set(lastSeen, count);
        }

        lastSeen = startingNumbers[count];
      } else {
        if (numbersSeen.has(lastSeen)) {
          const lastIndex = numbersSeen.get(lastSeen);
          numbersSeen.set(lastSeen, count);
          lastSeen = count - lastIndex;
        } else {
          numbersSeen.set(lastSeen, count);
          lastSeen = 0;
        }
      }
    }

    return lastSeen;
  };

  module.part2 = (input) => {
    return module.findTurnNumber(30000000, input);
  };

  module.removeOldNumbers = (numbers, next) => {
    let indexes = {};

    numbers.forEach((x, i) => {
      if (!indexes[x]) {
        indexes[x] = [];
      }

      indexes[x].push(i);
    });

    for (let i = indexes[next].length - 3; i > 0; i--) {
      delete numbers[indexes[i]];
    }

    /*console.log(indexes);*/
    return numbers;
  };

  return module;
})
();
