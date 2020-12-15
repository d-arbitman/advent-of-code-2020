const lib = require('./day15.library.js');

test('day 15, part 1 exampleInput', () => {
  const exampleInput = [0, 3, 6];

  expect(lib.part1(exampleInput)).toBe(436);
});

test('day 15, part 2 example input', () => {
  const exampleInput = [0, 3, 6];

  expect(lib.part2(exampleInput)).toBe(175594);
});
