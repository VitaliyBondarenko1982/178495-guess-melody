export const showResults = (playerTotalResult, anotherTotalResults) => {
  let gameResult = ``;
  if (playerTotalResult.time === 0) {
    gameResult = `Время вышло! Вы не успели отгадать все мелодии`;
    return gameResult;
  }

  if (playerTotalResult.lives === 0) {
    gameResult = `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
    return gameResult;
  }

  const pointsAllPlayers = anotherTotalResults.map((el) => el.points);
  pointsAllPlayers.push(playerTotalResult.points);
  const sortedResults = pointsAllPlayers.sort((a, b) => b - a);
  const playerPlaceIndex = sortedResults.indexOf(playerTotalResult.points);
  const playerPlace = playerPlaceIndex + 1;
  const numberPlayers = pointsAllPlayers.length;
  const percentSuccess = (numberPlayers - playerPlace) / numberPlayers * 100;
  gameResult = `Вы заняли ${playerPlace} место из ${numberPlayers} игроков. Это лучше, чем у ${percentSuccess}% игроков`;
  return gameResult;
};
