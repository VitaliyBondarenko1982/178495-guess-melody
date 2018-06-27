import {setGameTimer, createTimer} from "./timer";
import {calculatePlayerResult} from "./calculate-points";

let timer;
const ONE_SECOND = 1000;

export default class GameModel {
  constructor(state) {
    this._state = state;
    this.timer = setGameTimer(this.state.time);
    this.tick = this.tick.bind(this);
  }

  get state() {
    return this._state;
  }

  getPlayerResult() {
    return calculatePlayerResult(this.state);
  }

  nextLevel() {
    return this.state.level++;

  }

  die() {
    return this.state.lives--;
  }

  tick() {
    this.createTimer();
    this.timer.tick();
    this.state.time = this.timer.remainingTime;
    this.state.time = setGameTimer(this.state.time).tick();
    timer = setTimeout(() => {
      this.tick();
    }, ONE_SECOND);
    if (this.state.time === 0) {
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
