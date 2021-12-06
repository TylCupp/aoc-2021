const fs = require('fs');
const assert = require('assert');
const puzzle = require('./puzzle');

const input = fs
  .readFileSync('./day-02/input.txt', 'utf8')
  .replace(/[^\w\s]/gi, ' ')
  .split('\n');

describe('Calculate horizontal position and depth', () => {
  it('should calculate the end horizontal position and depth after given a number of commands', () => {
    assert.deepStrictEqual(puzzle.calculateNewPosition(input), 150);
  });
});

describe('Calculate horizontal position and depth when using aim', () => {
  it('should calculate the end horizontal position and depth after given a number of commands', () => {
    assert.deepStrictEqual(puzzle.calculateNewPositionPartTwo(input), 900);
  });
});