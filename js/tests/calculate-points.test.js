import {assert} from 'chai';
import {calculatePoints} from '../calculate-points';

const testPlayerResult = {
  allFastAnswers: [
    {
      correct: true,
      time: 25
    },
    {
      correct: true,
      time: 25
    },
    {
      correct: true,
      time: 25
    },
    {
      correct: true,
      time: 25
    },
    {
      correct: true,
      time: 25
    },
    {
      correct: true,
      time: 25
    },
    {
      correct: true,
      time: 25
    },
    {
      correct: true,
      time: 25
    },
    {
      correct: true,
      time: 25
    },
    {
      correct: true,
      time: 25
    }
  ],

  allIncorrectAnswers: [
    {
      correct: false,
      time: 32
    },
    {
      correct: false,
      time: 25
    },
    {
      correct: false,
      time: 25
    },
    {
      correct: false,
      time: 25
    },
    {
      correct: false,
      time: 25
    },
    {
      correct: false,
      time: 25
    },
    {
      correct: false,
      time: 25
    },
    {
      correct: false,
      time: 25
    },
    {
      correct: false,
      time: 35
    },
    {
      correct: false,
      time: 25
    }
  ]
};


describe(`Check calculate points`, () => {
  it(`should return 20, if all answers are correct faster 30s`, () => {
    assert.equal(calculatePoints(testPlayerResult.allFastAnswers), 20);
  });
  it(`should return -20, if all answers are incorrect`, () => {
    assert.equal(calculatePoints(testPlayerResult.allIncorrectAnswers), -20);
  });
});
