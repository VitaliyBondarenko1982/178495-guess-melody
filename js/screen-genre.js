import {getElementFromTemplate, changeScreen, updateScreen, compareArrays} from './utils';
import renderArtistTemplate from './screen-artist';
import renderHeaderTemplate from './header';
import renderOverAttempts from './screen-overAttempts';
import renderOverTime from './screen-overTime';
import overGameElement from './screen-overGame';
import {calculatePlayerResult} from './calculate-points';
import {INITIAL_STATE, levels, results} from './data-game';
import player from "./player";
import {NUMBER_ANSWERS, FAST_TIME_ANSWER} from "./calculate-points";

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
        let elemArr = levels[INITIAL_STATE.level].answers[i].correct;
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
      INITIAL_STATE.lives--;
    }

    INITIAL_STATE.level++;

    if (INITIAL_STATE.lives === 0) {
      updateScreen(renderHeaderTemplate(INITIAL_STATE));
      changeScreen(renderOverAttempts());
    } else if (INITIAL_STATE.time === 0) {
      updateScreen(renderHeaderTemplate(INITIAL_STATE));
      changeScreen(renderOverTime());
    } else if (INITIAL_STATE.level > NUMBER_ANSWERS) {
      updateScreen(renderHeaderTemplate(INITIAL_STATE));
      changeScreen(overGameElement(calculatePlayerResult()));
    } else if (levels[INITIAL_STATE.level].type === `artist`) {
      updateScreen(renderHeaderTemplate(INITIAL_STATE));
      changeScreen(renderArtistTemplate(levels[INITIAL_STATE.level]));
    } else {
      updateScreen(renderHeaderTemplate(INITIAL_STATE));
      changeScreen(renderGenreTemplate(levels[INITIAL_STATE.level]));
    }
  });

  const playerControlButtons = genreScreenElement.querySelectorAll(`.player-control`);

  [...playerControlButtons].forEach((elem) => {
    let audio = elem.previousElementSibling;
    player(elem, audio);
  });
  return genreScreenElement;

}
