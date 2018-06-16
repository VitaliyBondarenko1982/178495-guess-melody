import {getElementFromTemplate, changeScreen, updateScreen} from './utils';
import renderGenreTemplate from './screen-genre';
import renderHeaderTemplate from './header';
import renderOverAttempts from './screen-overAttempts';
import overGameElement from './screen-overGame';
import {calculatePlayerResult} from './calculate-points';
import renderOverTime from './screen-overTime';
import {initialState, levels, results} from './data-game';
import player from "./player";


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
      initialState.level++;

      let correctAnswer = answer.getAttribute(`correct-answer`);
      let isCorrect = (correctAnswer === `true`);
      let currentCorrectAnswer = {
        correct: isCorrect,
        time: 30
      };
      results.push(currentCorrectAnswer);
      if (currentCorrectAnswer.correct === false) {
        initialState.lives--;
      }

      if (initialState.lives === 0) {
        updateScreen(renderHeaderTemplate(initialState));
        changeScreen(renderOverAttempts());
      } else if (initialState.time === 0) {
        updateScreen(renderHeaderTemplate(initialState));
        changeScreen(renderOverTime());
      } else if (initialState.level === 11) {
        updateScreen(renderHeaderTemplate(initialState));
        changeScreen(overGameElement(calculatePlayerResult()));
      } else if (levels[initialState.level].type === `genre`) {
        updateScreen(renderHeaderTemplate(initialState));
        changeScreen(renderGenreTemplate(levels[initialState.level]));
      } else {
        updateScreen(renderHeaderTemplate(initialState));
        changeScreen(renderArtistTemplate(levels[initialState.level]));
      }
    });
  });

  const audioTrack = artistScreenElement.querySelector(`.player audio`);
  const playerControlButton = artistScreenElement.querySelector(`.player-control`);

  player(playerControlButton, audioTrack);

  return artistScreenElement;
}
