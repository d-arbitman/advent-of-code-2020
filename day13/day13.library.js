module.exports = (() => {
  let module = {};

  module.part1 = (input) => {
    const [arrival, schedules] = [input[0], input[1].split(",").filter(x => x !== 'x').map(x => Number(x))];
    let bestSchedule = 0;
    let waitTime = module.calculateWaitTime(arrival, schedules[0]);

    for (let i = 1; i < schedules.length; i++) {
      const newWaitTime = module.calculateWaitTime(arrival, schedules[i]);
      if (newWaitTime < waitTime) {
        waitTime = newWaitTime;
        bestSchedule = i;
      }
    }

    return waitTime * schedules[bestSchedule];
  };

  module.part2 = (input) => {
    const buses = input[1]
        .split(",")
        .sort((a, b) => b.num - a.num)
        .map((x, i) => {
          if (x !== 'x') {
            return {
              num: BigInt(x),
              index: BigInt(module.absValueMod(x - i, x)),
            };
          }
        }).filter(x => x !== undefined);
    let num = buses[0].num;
    let index = buses[0].index;

    for (let i = 1; i < buses.length; i++) {
      const bus = buses[i];

      while (index % bus.num !== bus.index) {
        index += num;
      }

      num *= bus.num;
    }

    return index;
  };

  // to fix https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers
  module.absValueMod = (a, n) => {
    a = Number(a);
    n = Number(n);

    a += (Math.ceil(Math.abs(a / n))) * n + n;

    return a % n;
  };

  module.calculateWaitTime = (arrival, schedule) => {
    return (schedule - (arrival % schedule)) % schedule;
  };

  return module;
})();
