import {initialState, results} from "./data-game";
import {showResults} from "./show-results";
import {anotherTotalResultsArr} from "./show-results.test.js";

const NUMBER_ANSWERS = 10;
const FAST_TIME_ANSWER = 30;

const answerPoints = {
  CORRECT: 1,
  FAST: 2,
  INCORRECT: -2
};


export const calculatePoints = (playerAnswers, leftLives) => {
  if (playerAnswers.length < NUMBER_ANSWERS) {
    return -1;
  }
  const countLives = leftLives >= 0;
  let points = 0;
  playerAnswers.forEach((el) => {
    if (el.correct && el.time >= FAST_TIME_ANSWER && countLives) {
      points += answerPoints.CORRECT;
    } else if (el.correct && el.time < FAST_TIME_ANSWER && countLives) {
      points += answerPoints.FAST;
    } else if (!el.correct && countLives) {
      points += answerPoints.INCORRECT;
    }
  });

  return points;
};

export const calculatePlayerResult = () => {
  initialState.points = calculatePoints(results, initialState.lives);
  let calculateFastAnswers = (array) => {
    let count = 0;
    array.forEach((element) => {
      if (element.time < FAST_TIME_ANSWER) {
        count++;
      }
    });
    return count;
  };
  let statInfo = showResults(initialState, anotherTotalResultsArr);
  initialState.fastAnswers = calculateFastAnswers(results);
  initialState.stat = statInfo;

  return initialState;
};
