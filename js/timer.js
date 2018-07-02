
export const setGameTimer = (time) => {
  const gameTimer = {
    remainingTime: time,
    tick() {
      if (this.remainingTime > 0) {
        this.remainingTime -= 1;
      }
      this.isTimeout = (this.remainingTime === 0);
      return this.remainingTime;
    }
  };

  return gameTimer;
};

export const createTimer = (state) => {
  let min = Math.floor(state.time / 60);
  let sec = state.time - (min * 60);
  min = min <= 9 ? `0${min}` : min;
  sec = sec <= 9 ? `0${sec}` : sec;

  state.currentTime = {
    min,
    sec
  };
};
