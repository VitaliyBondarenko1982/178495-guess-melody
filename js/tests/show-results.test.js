import {assert} from 'chai';
import {showResults} from '../show-results';
import {anotherTotalResultsArr} from '../calculate-points';


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
