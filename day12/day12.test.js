const lib = require('./day12.library.js');

test('day 12, part 1 exampleInput', () => {
  const exampleInput = `F10
N3
F7
R90
F11`.split("\n");

  expect(lib.part1(exampleInput)).toBe(25);
});

test('day 12, part 2 example input', () => {
  const exampleInput = ``.split("\n");

  expect(lib.part2(exampleInput)).toBe(0);
});
