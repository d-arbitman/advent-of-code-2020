const lib = require('./day08.library.js');
const Computer = require('../Computer.js');

test('day 08, part 1 exampleInput', () => {
  const exampleInput = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;

  expect(lib.part1(exampleInput)).toBe(5);
});

test('day 08, part 2 example input', () => {
  const exampleInput = `nop +0
  acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;

  expect(lib.part2(exampleInput)).toBe(8);
});

test('day 08, accessory lines', () => {
  const exampleInput = `foo +0
nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;

  let computer = new Computer(exampleInput);
  const consoleLog = console.log;
  console.log = jest.fn();

  computer.debug = true;
  computer.fixInstruction();
  console.log = consoleLog;

  expect(computer.accumulator).toBe(8);
});
