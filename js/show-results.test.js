import {assert} from 'chai';
import {showResults} from "./show-results";

const anotherTotalResultsArr = [
  {
    points: 9,
    lives: 1,
    time: 4
  },
  {
    points: 15,
    lives: 2,
    time: 10
  },
  {
    points: 17,
    lives: 2,
    time: 10
  },
  {
    points: 19,
    lives: 3,
    time: 8
  },
  {
    points: 13,
    lives: 2,
    time: 10
  },
  {
    points: 14,
    lives: 1,
    time: 15
  },
  {
    points: 12,
    lives: 1,
    time: 10
  }
];

const makePlayerTotalResult = (playerPoints, playerLives, playerTime) => ({
  points: playerPoints,
  lives: playerLives,
  time: playerTime
});

describe(`Show Game Result`, () => {
  it(`Must return «Время вышло! Вы не успели отгадать все мелодии»`, () => {
    assert.equal(showResults(makePlayerTotalResult(15, 2, 0), anotherTotalResultsArr), `Время вышло! Вы не успели отгадать все мелодии`);
  });

  it(`Must return «У вас закончились все попытки. Ничего, повезёт в следующий раз!»`, () => {
    assert.equal(showResults(makePlayerTotalResult(13, 0, 4), anotherTotalResultsArr), `У вас закончились все попытки. Ничего, повезёт в следующий раз!`);
  });

  it(`Must return Вы заняли 2 место из 5 игроков. Это лучше, чем у 60% игроков`, () => {
    assert.equal(showResults(makePlayerTotalResult(18, 3, 7), anotherTotalResultsArr), `Вы заняли 2 место из 8 игроков. Это лучше, чем у 75% игроков`);
  });
});
