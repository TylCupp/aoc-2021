const fs = require('fs');
const assert = require('assert');
const puzzle = require('./puzzle');

const input = fs
  .readFileSync('./day-01/input.txt', 'utf8')
  .replace(/[^\w\s]/gi, ' ')
  .split('\n')
  .map(Number);

describe('Depth Increase Counter', () => {
  it('should return the number of times the depth increases agaisnt the other', () => {
    assert.deepStrictEqual(puzzle.depthIncreaseCount(input), 7);
  });
});

describe('Depth Increase Counter on 3', () => {
  it('should return the number of times the depth increases in blocks of 3, agaisnt the next block of 3', () => {
    assert.deepStrictEqual(puzzle.depthIncreaseCountThree(input), 5);
  });
});