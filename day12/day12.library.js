module.exports = (function () {
  let module = {};

  module.part1 = (input) => {
    const DIRECTIONS = { E: [1, 0], W: [-1, 0], N: [0, 1], S: [0, -1] };
    const TURN = ['N', 'E', 'S', 'W'];
    let position = [0, 0];
    let direction = 'E';
    const instructions = module.parseDirections(input);

    for (let i = 0; i < instructions.length; i++) {
      if (instructions[i].direction === 'F') {
        position = [position[0] + instructions[i].units * DIRECTIONS[direction][0], position[1] + instructions[i].units * DIRECTIONS[direction][1]];
      } else if (['E', 'W', 'N', 'S'].includes(instructions[i].direction)) {
        position = [position[0] + instructions[i].units * DIRECTIONS[instructions[i].direction][0], position[1] + instructions[i].units * DIRECTIONS[instructions[i].direction][1]];
      } else {
        if (instructions[i].direction === 'R') {
          direction = TURN[(TURN.indexOf(direction) + instructions[i].units / 90) % TURN.length];
        } else if (instructions[i].direction === 'L') {
          direction = TURN[(TURN.indexOf(direction) - instructions[i].units / 90 + TURN.length) % TURN.length];
        }
      }
    }

    return Math.abs(position[0]) + Math.abs(position[1]);
  };

  module.part2 = (input) => {
    let position = [0, 0];
    let waypointPosition = [10, 0];
    const instructions = module.parseDirections(input);

    for (let i = 0; i < instructions.length; i++) {
      const movement = instructions[i].direction;

      if (movement === 'N') {
        waypointPosition = [waypointPosition[0], waypointPosition[1] + instructions[i].units];
      } else if (movement === 'S') {
        waypointPosition = [waypointPosition[0], waypointPosition[1] - instructions[i].units];
      } else if (movement === 'E') {
        waypointPosition = [waypointPosition[0] + instructions[i].units, waypointPosition[1]];
      } else if (movement === 'W') {
        waypointPosition = [waypointPosition[0] - instructions[i].units, waypointPosition[1]];
      } else if (movement === 'R') {
        while (instructions[i].units > 0) {
          const tmp = waypointPosition[1];
          waypointPosition[1] = -waypointPosition[0];
          waypointPosition[0] = tmp;
          instructions[i].units -= 90;
        }
      } else if (movement === 'L') {
        while (instructions[i].units > 0) {
          const tmp = waypointPosition[1];
          waypointPosition[1] = waypointPosition[0];
          waypointPosition[0] = -tmp;
          instructions[i].units -= 90;
        }
      } else if (movement === 'F') {
        position[0] += instructions[i].units * waypointPosition[0];
        position[1] += instructions[i].units * waypointPosition[1];
      }
    }

    return Math.abs(position[0]) + Math.abs(position[1]);
  };

  module.parseDirections = (input) => {
    let directions = [];

    for (let i = 0; i < input.length; i++) {
      directions.push({
        direction: input[i][0],
        units: input[i].substr(1),
      });
    }

    return directions;
  };

  return module;
})();
