const Computer = require('./Computer.js');

module.exports = function() {
  let module = {};

  module.part1 = (input) => {
    let computer = new Computer(input);
    computer.run();
    return computer.accumulator;
  };

  module.part2 = (input) => {
    let computer = new Computer(input);
    computer.fixInstruction();
    return computer.accumulator;
  };

  return module;
}();
