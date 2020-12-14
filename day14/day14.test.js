const lib = require('./day14.library.js');

test('day 14, part 1 exampleInput', () => {
  const exampleInput = `mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
mem[8] = 11
mem[7] = 101
mem[8] = 0`.split("\n");

  expect(lib.part1(exampleInput)).toBe(165);
});

test('day 14, part 2 example input', () => {
  const exampleInput = `mask = 000000000000000000000000000000X1001X
mem[42] = 100
mask = 00000000000000000000000000000000X0XX
mem[26] = 1`.split("\n");

  expect(lib.part2(exampleInput)).toBe(208);
});
