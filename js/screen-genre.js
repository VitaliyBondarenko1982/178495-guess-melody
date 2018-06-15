import {getElementFromTemplate, changeScreen, updateScreen} from './utils';
import renderArtistTemplate from './screen-artist';
import renderHeaderTemplate from './header';
import renderOverAttempts from './screen-overAttempts';
import renderOverTime from './screen-overTime';
import overGameElement from './screen-overGame';
import {calculatePlayerResult} from './calculate-points';
import {initialState, levels, results} from './data-game';
import player from "./player";

export default function renderGenreTemplate(state) {
  const answersGenre = (item, i) => {
    return `<div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio src = "${item.audio}" ${item.autoplay ? `autoplay` : ``}></audio>
              <button class="player-control player-control ${item.autoplay ? `player-control--pause` : `player-control--play`}"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-${i}" id="a-${i}" correct-answer="${item.correct}">
          <label class="genre-answer-check" for="a-${i}"></label>
        </div>`;
  };

  const genreScreen =
    `<div class="main-wrap">
      <h2 class="title">Выберите ${state.genre} треки</h2>
      <form class="genre">
      ${state.answers.map((answer, index) => answersGenre(answer, index)).join(``)}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </div>
`;

  const genreScreenElement = getElementFromTemplate(genreScreen);

  const genreAnswerButton = genreScreenElement.querySelector(`.genre-answer-send`);

  genreAnswerButton.disabled = `true`;

  const inputElements = Array.from(genreScreenElement.querySelectorAll(`.genre-answer input[type="checkbox"]`));

  inputElements.forEach((input) => {
    input.addEventListener(`change`, () => {
      const checkedInput = inputElements.some((it) => it.checked);

      genreAnswerButton.disabled = !checkedInput;
    });
  });


  genreAnswerButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    initialState.level++;

    let correctAnswer = () => {
      let currentAnswersGenre = [];
      let result = ``;
      [...inputElements].forEach((elem) => {
        let correct = elem.getAttribute(`correct-answer`);
        let isCorrect = (correct === `true`);
        if (elem.checked === true) {
          currentAnswersGenre.push(isCorrect);
        }
      });

      result = currentAnswersGenre.every((el) => {
        return el === true;
      });
      return result;
    };

    let currentCorrectAnswer = {
      correct: correctAnswer(),
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
    } else if (levels[initialState.level].type === `artist`) {
      updateScreen(renderHeaderTemplate(initialState));
      changeScreen(renderArtistTemplate(levels[initialState.level]));
    } else {
      updateScreen(renderHeaderTemplate(initialState));
      changeScreen(renderGenreTemplate(levels[initialState.level]));
    }
  });

  const playerControlButtons = genreScreenElement.querySelectorAll(`.player-control`);

  [...playerControlButtons].forEach((elem) => {
    let audio = elem.previousElementSibling;
    player(elem, audio);
  });
  return genreScreenElement;

}
