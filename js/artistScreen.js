import {changeScreen} from './utils';
import renderGenreScreen from './genreScreen';
import renderHeaderTemplate from './header';
import overAttemptsScreen from './overAttemptsScreen';
import overGameScreen from './overGameScreen';
import {calculatePlayerResult, NUMBER_ANSWERS, FAST_TIME_ANSWER} from './calculate-points';
import overTimeScreen from './overTimeScreen';
import {INITIAL_STATE, levels, results} from './data-game';
import ArtistView from "./artistScreenView";


export default function renderArtistScreen(state) {
  const artistView = new ArtistView(levels[state.level]);

  changeScreen(artistView.element, renderHeaderTemplate(state));

  artistView.onSwitch = (evt) => {
    INITIAL_STATE.level++;

    let correctAnswer = evt.currentTarget.getAttribute(`correct-answer`);
    let isCorrect = (correctAnswer === `true`);
    let currentCorrectAnswer = {
      correct: isCorrect,
      time: FAST_TIME_ANSWER
    };
    results.push(currentCorrectAnswer);
    if (currentCorrectAnswer.correct === false) {
      INITIAL_STATE.lives--;
    }

    if (state.lives === 0) {
      overAttemptsScreen();
    } else if (state.time === 0) {
      overTimeScreen();
    } else if (state.level > NUMBER_ANSWERS) {
      overGameScreen(calculatePlayerResult());
    } else if (levels[state.level].type === `genre`) {
      renderGenreScreen(state);
    } else {
      renderArtistScreen(state);
    }
  };
}
