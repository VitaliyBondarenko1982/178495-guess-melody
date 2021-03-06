import {changeScreen} from '../utils';
import {NUMBER_ANSWERS} from '../calculate-points';
import {results} from '../data/data-game';
import ArtistView from '../view/artistScreenView';
import Application from '../application';
import renderHeaderTemplate from './header';
import {timerMin, timerSec} from './header';

let timerValue;

export default class ArtistScreen {
  constructor(model) {
    this.model = model;
    this.content = new ArtistView(this.model.currentState, this.model.getNumberLevel(this.model.state.level - 1));
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
    } else if (this.model.getNumberLevel(this.model.state.level - 1).type === `genre`) {
      Application.showGenreScreen();
      this.model.tick();
    } else {
      Application.showArtistScreen();
      this.model.tick();
    }
  }

  changeLevel() {
    const previousAnswerTime = this.model.state.time;

    this.content.onSwitch = (evt) => {
      this.model.nextLevel();
      this.model.stopTimer();
      this.stopTimerValue();

      const correctAnswer = evt.currentTarget.getAttribute(`correct-answer`);
      const isCorrect = (correctAnswer === `true`);
      const currentAnswerTime = this.model.state.time;
      const answerTime = previousAnswerTime - currentAnswerTime;
      const currentCorrectAnswer = {
        correct: isCorrect,
        time: answerTime
      };
      results.push(currentCorrectAnswer);
      if (currentCorrectAnswer.correct === false) {
        this.model.die();
      }
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
    this.setTimerValue();
    this.changeLevel();
  }
}
