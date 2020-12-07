const lib = require('./day03.library.js');

test('day 03, part 1 exampleInput', () => {
  const exampleInput = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`.split("\n");

  expect(lib.part1(exampleInput)).toBe(12);
});

test('day 03, part 2 example input', () => {
  const exampleInput = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`.split("\n");

  expect(lib.part2(exampleInput)).toBe(336);
})
