import GenreView from "../view/genreScreenView";
import {levels, results} from '../data/data-game';
import {changeScreen, compareArrays} from '../utils';
import {NUMBER_ANSWERS} from '../calculate-points';
import Router from "../router";
import renderHeaderTemplate from './header';
import {timerMin, timerSec} from './header';

let timerValue;

export default class GenreScreen {
  constructor(model) {
    this.model = model;
    this.content = new GenreView(this.model.currentState, this.model.getNumberLevel(this.model.state.level));
    this.root = changeScreen(this.content.element, renderHeaderTemplate(this.model.state));
    this.timerValue = timerValue;
  }

  get element() {
    return this.root;
  }

  answer() {
    if (this.model.state.lives === 0) {
      Router.showOverAttemptsScreen();
    } else if (this.model.state.time === 0) {
      Router.showOverTimeScreen();
    } else if (this.model.state.level > NUMBER_ANSWERS) {
      Router.showOverGameScreen();
      this.model.stopTimer();
    } else if (this.model.getNumberLevel(this.model.state.level - 1).type === `artist`) {
      Router.showArtistScreen();
      this.model.tick();
    } else {
      Router.showGenreScreen();
      this.model.tick();
    }
  }

  changeLevel() {
    let previousAnswerTime = this.model.state.time;
    this.content.onSwitch = (evt, inputElements) => {
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
          let elemArr = levels[this.model.state.level].answers[i].correct;
          elemArray = elemArr;
          correctDataArr.push(elemArray);
        }
        return correctDataArr;
      };

      let answersDataArr = answersData();
      let currentAnswerTime = this.model.state.time;
      let answerTime = previousAnswerTime - currentAnswerTime;
      let currentCorrectAnswer = {
        correct: compareArrays(answersGenreArr, answersDataArr),
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
    if (this.model.state.time === 0) {
      this.stopTimerValue();
    }
  }

  stopTimerValue() {
    clearTimeout(this.timerValue);
  }

  init() {
    this.changeLevel();
    this.setTimerValue();
  }
}
