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
