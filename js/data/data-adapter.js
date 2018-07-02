import {calculatePoints} from '../calculate-points';

export const adaptServerData = (data) => {
  for (const level of Object.values(data)) {
    if (level.type === `artist`) {
      level.audio = level.src;
      delete level.src;
      level.answers.forEach((answer) => {
        answer.image = answer.image.url;
        delete answer.image.url;
        answer.artist = answer.title;
        delete answer.title;
        answer.correct = answer.isCorrect;
        delete answer.isCorrect;
      });
    } else {
      level.answers.forEach((answer) => {
        answer.correct = answer.genre === level.genre;
        answer.audio = answer.src;
        delete answer.src;
      });
    }
  }
  return data;
};

export const adaptServerResults = (data) => {
  const adaptedResults = data.map((item) => {
    return calculatePoints(item);
  });

  return adaptedResults;
};
