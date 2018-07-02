import {setGameTimer, createTimer} from './timer';
import {calculatePlayerResult} from './calculate-points';
import {goToStartInitialState} from './utils';
import {INITIAL_STATE} from './data/data-game';

let timer;
const ONE_SECOND = 1000;

export default class GameModel {
  constructor(data) {
    this.data = data;
    this.state = INITIAL_STATE;
    this.timer = setGameTimer(this.state.time);
    this.tick = this.tick.bind(this);
  }

  get currentState() {
    return this.state;
  }

  getNumberLevel(numberLevel) {
    return this.data[numberLevel];
  }

  getStartGame() {
    return this.data[0].type;
  }

  // calculatePoints() {
  //   return calculatePoints(this.state);
  // }

  getPlayerResult() {
    return calculatePlayerResult(this.state);
  }

  nextLevel() {
    return this.state.level++;

  }

  die() {
    return this.state.lives--;
  }

  goToStartInitialState() {
    return goToStartInitialState(this.state);
  }

  tick() {
    this.createTimer();
    this.timer.tick();
    this.state.time = this.timer.remainingTime;
    this.state.time = setGameTimer(this.state.time).tick();
    timer = setTimeout(() => {
      this.tick();
    }, ONE_SECOND);

    if (this.state.time < 0) {
      this.stopTimer();
    }
  }

  stopTimer() {
    clearTimeout(timer);
    this.createTimer();
  }

  createTimer() {
    return createTimer(this.state);
  }
}
