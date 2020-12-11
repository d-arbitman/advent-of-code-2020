const lib = require('./day11.library.js');

test('day 11, part 1 exampleInput', () => {
  const exampleInput = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`;

  expect(lib.part1(exampleInput)).toBe(37);
});

test('day 11, part 2 example input', () => {
  const exampleInput = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`;

  expect(lib.part2(exampleInput)).toBe(26);
});
