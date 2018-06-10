import {assert} from 'chai';
import {countScore} from '../count-score.js';

const testAnswersArrays = [
  [
    {isRight: true, time: 10}],
  [
    {isRight: true, time: 15},
    {isRight: true, time: 15},
    {isRight: true, time: 15},
    {isRight: true, time: 15},
    {isRight: true, time: 15},
    {isRight: true, time: 15},
    {isRight: true, time: 15},
    {isRight: true, time: 15},
    {isRight: true, time: 15},
    {isRight: true, time: 15}
  ],
  [
    {isRight: false, time: 15},
    {isRight: false, time: 15},
    {isRight: false, time: 15},
    {isRight: false, time: 15},
    {isRight: false, time: 15},
    {isRight: false, time: 15},
    {isRight: false, time: 15},
    {isRight: false, time: 15},
    {isRight: false, time: 15},
    {isRight: false, time: 15}
  ],
  [
    {isRight: false, time: 1},
    {isRight: false, time: 2},
    {isRight: false, time: 3},
    {isRight: false, time: 4},
    {isRight: false, time: 5},
    {isRight: false, time: 6},
    {isRight: false, time: 7},
    {isRight: false, time: 8},
    {isRight: false, time: 9},
    {isRight: false, time: 1}
  ],
  [
    {isRight: true, time: 1},
    {isRight: true, time: 2},
    {isRight: true, time: 3},
    {isRight: true, time: 4},
    {isRight: true, time: 5},
    {isRight: true, time: 6},
    {isRight: true, time: 7},
    {isRight: true, time: 8},
    {isRight: true, time: 9},
    {isRight: true, time: 10}
  ],
  [
    {isRight: true, time: 100},
    {isRight: true, time: 20},
    {isRight: true, time: 999},
    {isRight: true, time: 10},
    {isRight: true, time: 19},
    {isRight: true, time: 18},
    {isRight: true, time: 15},
    {isRight: true, time: 11},
    {isRight: true, time: 9},
    {isRight: true, time: 1}
  ],
  [
    {isRight: true, time: 1},
    {isRight: true, time: 2},
    {isRight: true, time: 9},
    {isRight: false, time: 100},
    {isRight: false, time: 19},
    {isRight: false, time: 18},
    {isRight: false, time: 15},
    {isRight: false, time: 11},
    {isRight: false, time: 9},
    {isRight: false, time: 1}
  ],
  [
    {isRight: true, time: 1},
    {isRight: true, time: 2},
    {isRight: true, time: 9},
    {isRight: true, time: 5},
    {isRight: false, time: 1},
    {isRight: true, time: 20},
    {isRight: true, time: 1000},
    {isRight: true, time: 15},
    {isRight: true, time: 11},
    {isRight: true, time: 19}
  ]
];

describe(`Game score count`, () => {
  it(`should return -1 when answers count is less than 10 or lives count is 0`, () => {
    assert.equal(countScore(testAnswersArrays[0], 3), -1);
  });

  it(`should return -1 when lives count is 0`, () => {
    assert.equal(countScore(testAnswersArrays[1], 0), -1);
  });

  it(`should return 1150 when all answers are correct, normal, lives count is 3`, () => {
    assert.equal(countScore(testAnswersArrays[1], 3), 1150);
  });

  it(`should return 50 when all answers are not correct, normal, lives count is 1`, () => {
    assert.equal(countScore(testAnswersArrays[2], 1), 50);
  });

  it(`should return 50 when all answers are not correct, fast, lives count is 1`, () => {
    assert.equal(countScore(testAnswersArrays[3], 2), 100);
  });

  it(`should return 1500 when all answers are correct, 9 fast, 1 normal, lives count is 1`, () => {
    assert.equal(countScore(testAnswersArrays[4], 1), 1500);
  });

  it(`should return 1050 when all answers are correct, 3 slow, 5 normal, 2 fast, lives count is 2`, () => {
    assert.equal(countScore(testAnswersArrays[5], 2), 1050);
  });

  it(`should return 600 when 3 fast answers are correct, 7 answers are not correct, lives count is 3`, () => {
    assert.equal(countScore(testAnswersArrays[6], 3), 600);
  });

  it(`should return 1050 when 4 fast answers are correct, 2 slow answers are correct, 3 normal answers are correct, 1 answer is not correct, lives count is 1`, () => {
    assert.equal(countScore(testAnswersArrays[7], 1), 1050);
  });
});
