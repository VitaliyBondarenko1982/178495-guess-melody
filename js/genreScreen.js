import GenreView from "./genreScreenView";
import {levels, results} from './data-game';
import {changeScreen, compareArrays} from './utils';
import renderHeaderTemplate from './header';
import renderArtistScreen from './artistScreen';
import overAttemptsScreen from './overAttemptsScreen';
import overTimeScreen from './overTimeScreen';
import overGameScreen from './overGameScreen';
import {calculatePlayerResult, NUMBER_ANSWERS, FAST_TIME_ANSWER} from './calculate-points';


export default function renderGenreScreen(state) {
  const genreView = new GenreView(levels[state.level]);

  changeScreen(genreView.element, renderHeaderTemplate(state));

  genreView.onSwitch = (evt, inputElements) => {
    evt.preventDefault();

    let correctAnswer = () => {
      let currentAnswersGenre = [];
      inputElements.forEach((elem) => {
        let correct = elem.getAttribute(`correct-answer`);
        let isCorrect = (correct === `true`);
        if (elem.checked === isCorrect) {
          currentAnswersGenre.push(isCorrect);
        } else {
          currentAnswersGenre.push(!isCorrect);
        }
      });

      return currentAnswersGenre;
    };

    let answersGenreArr = correctAnswer();

    let answersData = () => {
      let correctDataArr = [];
      let elemArray = ``;
      for (let i = 0; i <= 3; i++) {
        let elemArr = levels[state.level].answers[i].correct;
        elemArray = elemArr;
        correctDataArr.push(elemArray);
      }
      return correctDataArr;
    };

    let answersDataArr = answersData();

    let currentCorrectAnswer = {
      correct: compareArrays(answersGenreArr, answersDataArr),
      time: FAST_TIME_ANSWER
    };

    results.push(currentCorrectAnswer);

    if (currentCorrectAnswer.correct === false) {
      state.lives--;
    }

    state.level++;

    if (state.lives === 0) {
      overAttemptsScreen();
    } else if (state.time === 0) {
      overTimeScreen();
    } else if (state.level > NUMBER_ANSWERS) {
      overGameScreen(calculatePlayerResult());
    } else if (levels[state.level].type === `artist`) {
      renderArtistScreen(state);
    } else {
      renderGenreScreen(state);
    }
  };
}
