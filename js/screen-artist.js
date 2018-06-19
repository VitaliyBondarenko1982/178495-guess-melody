import {getElementFromTemplate, changeScreen, updateScreen} from './utils';
import renderGenreTemplate from './screen-genre';
import renderHeaderTemplate from './header';
import renderOverAttempts from './screen-overAttempts';
import overGameElement from './screen-overGame';
import {calculatePlayerResult} from './calculate-points';
import renderOverTime from './screen-overTime';
import {INITIAL_STATE, levels, results} from './data-game';
import player from "./player";
import {NUMBER_ANSWERS, FAST_TIME_ANSWER} from "./calculate-points";

export default function renderArtistTemplate(state) {
  const answersArtist = (item, i) => {
    return `<div class="main-answer-wrapper" correct-answer="${item.correct}">
      <input class="main-answer-r" type="radio" id="answer-${i}" name="answer" value="val-${i}"/>
       <label class="main-answer" for="answer-${i}">
      <img class="main-answer-preview" src="${item.image}"
             alt="${item.artist}" width="134" height="134">
        ${item.artist}
     </label>
    </div>`;
  };

  const artistScreen = `<div class="main-wrap">
      <h2 class="title main-title">Кто исполняет эту песню?</h2>
      <div class="player-wrapper">
        <div class="player">
          <audio src="${state.audio}" autoplay></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <form class="main-list">
      ${state.answers.map((answer, index) => answersArtist(answer, index)).join(``)}
      </form>
    </div>`;
  const artistScreenElement = getElementFromTemplate(artistScreen);
  const answerButtons = artistScreenElement.querySelectorAll(`.main-answer-wrapper`);

  [...answerButtons].forEach((answer) => {
    answer.addEventListener(`click`, () => {
      INITIAL_STATE.level++;

      let correctAnswer = answer.getAttribute(`correct-answer`);
      let isCorrect = (correctAnswer === `true`);
      let currentCorrectAnswer = {
        correct: isCorrect,
        time: FAST_TIME_ANSWER
      };
      results.push(currentCorrectAnswer);
      if (currentCorrectAnswer.correct === false) {
        INITIAL_STATE.lives--;
      }

      if (INITIAL_STATE.lives === 0) {
        updateScreen(renderHeaderTemplate(INITIAL_STATE));
        changeScreen(renderOverAttempts());
      } else if (INITIAL_STATE.time === 0) {
        updateScreen(renderHeaderTemplate(INITIAL_STATE));
        changeScreen(renderOverTime());
      } else if (INITIAL_STATE.level > NUMBER_ANSWERS) {
        updateScreen(renderHeaderTemplate(INITIAL_STATE));
        changeScreen(overGameElement(calculatePlayerResult()));
      } else if (levels[INITIAL_STATE.level].type === `genre`) {
        updateScreen(renderHeaderTemplate(INITIAL_STATE));
        changeScreen(renderGenreTemplate(levels[INITIAL_STATE.level]));
      } else {
        updateScreen(renderHeaderTemplate(INITIAL_STATE));
        changeScreen(renderArtistTemplate(levels[INITIAL_STATE.level]));
      }
    });
  });

  const audioTrack = artistScreenElement.querySelector(`.player audio`);
  const playerControlButton = artistScreenElement.querySelector(`.player-control`);

  player(playerControlButton, audioTrack);

  return artistScreenElement;
}
