import {results} from "./data/data-game";
import {showResults} from "./show-results";

export const NUMBER_ANSWERS = 10;
export const FAST_TIME_ANSWER = 30;

const ANSWER_POINTS = {
  CORRECT: 1,
  FAST: 2,
  INCORRECT: -2
};

export const anotherTotalResultsArr = [
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

export const calculatePoints = (playerAnswers) => {
  // if (playerAnswers.length < NUMBER_ANSWERS && INITIAL_STATE.lives > 0 || INITIAL_STATE.lives === 0) {
  //   return -1;
  // }
  // const countLives = leftLives >= 0;
  let points = 0;
  playerAnswers.forEach((el) => {
    if (el.correct && el.time >= FAST_TIME_ANSWER) {
      points += ANSWER_POINTS.CORRECT;
    } else if (el.correct && el.time < FAST_TIME_ANSWER) {
      points += ANSWER_POINTS.FAST;
    } else if (!el.correct) {
      points += ANSWER_POINTS.INCORRECT;
    }
  });

  return points;
};

export const calculatePlayerResult = (state) => {
  state.points = calculatePoints(results);
  const calculateFastAnswers = (results.filter((it) => it.time < 30 && it.correct === true)).length;
  let statInfo = showResults(state, anotherTotalResultsArr);
  state.fastAnswers = calculateFastAnswers;
  state.stat = statInfo;

  return state;
};
