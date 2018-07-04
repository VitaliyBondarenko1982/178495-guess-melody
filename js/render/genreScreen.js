import GenreView from '../view/genreScreenView';
import {results} from '../data/data-game';
import {changeScreen, compareArrays} from '../utils';
import {NUMBER_ANSWERS} from '../calculate-points';
import Application from '../application';
import renderHeaderTemplate from './header';
import {timerMin, timerSec} from './header';

let timerValue;

export default class GenreScreen {
  constructor(model) {
    this.model = model;
    this.content = new GenreView(this.model.currentState, this.model.getNumberLevel(this.model.state.level - 1));
    this.root = changeScreen(this.content.element, renderHeaderTemplate(this.model.state));
    this.timerValue = timerValue;
  }

  get element() {
    return this.root;
  }

  answer() {
    if (this.model.state.lives === 0) {
      Application.showOverAttemptsScreen();
    } else if (this.model.state.time === 0) {
      Application.showOverTimeScreen();
    } else if (this.model.state.level > NUMBER_ANSWERS) {
      Application.showStatisticScreen();
      this.model.stopTimer();
    } else if (this.model.getNumberLevel(this.model.state.level - 1).type === `artist`) {
      Application.showArtistScreen();
      this.model.tick();
    } else {
      Application.showGenreScreen();
      this.model.tick();
    }
  }

  changeLevel() {
    const previousAnswerTime = this.model.state.time;
    this.content.onSwitch = (evt, inputElements) => {
      evt.preventDefault();

      const getPlayerAnswers = () => {
        const currentPlayerAnswers = [];
        inputElements.forEach((elem) => {
          const correct = elem.getAttribute(`correct-answer`);
          const isCorrect = (correct === `true`);
          if (elem.checked === isCorrect) {
            currentPlayerAnswers.push(isCorrect);
          } else {
            currentPlayerAnswers.push(!isCorrect);
          }
        });

        return currentPlayerAnswers;
      };

      const playerAnswers = getPlayerAnswers();

      const getCorrectAnswers = (data) => {
        return data.answers.map((item) => item.correct);
      };

      const dataAnswers = getCorrectAnswers(this.model.getNumberLevel(this.model.state.level - 1));
      const currentAnswerTime = this.model.state.time;
      const answerTime = previousAnswerTime - currentAnswerTime;
      const currentCorrectAnswer = {
        correct: compareArrays(playerAnswers, dataAnswers),
        time: answerTime
      };

      results.push(currentCorrectAnswer);

      if (currentCorrectAnswer.correct === false) {
        this.model.die();
      }

      this.model.nextLevel();
      this.model.stopTimer();
      this.stopTimerValue();

      this.answer();

    };
  }

  setTimerValue() {
    timerMin.innerHTML = this.model.state.currentTime.min;
    timerSec.innerHTML = this.model.state.currentTime.sec;
    this.timerValue = setTimeout(() => {
      this.setTimerValue();
    }, 1000);
  }

  stopTimerValue() {
    clearTimeout(this.timerValue);
  }

  init() {
    this.changeLevel();
    this.setTimerValue();
  }
}
