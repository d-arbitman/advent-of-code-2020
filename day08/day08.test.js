const lib = require('./day08.library.js');

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
