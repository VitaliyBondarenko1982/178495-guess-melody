
export const setGameTimer = (time) => {
  const gameTimer = {
    remainingTime: time,
    tick() {
      this.remainingTime--;

      if (this.remainingTime > 0) {
        return this.remainingTime;
      } else {
        return `Время вышло!`;
      }
    }
  };

  return gameTimer;
};
