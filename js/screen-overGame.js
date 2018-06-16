import {getElementFromTemplate, updateScreen, goToStartInitialState} from './utils';
import welcomeScreenElement from "./screen-welcome";

export default function (obj) {
  const overGame = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
      <br>вы&nbsp;набрали ${obj.points} баллов (${obj.fastAnswers} быстрых)
      <br>совершив ${3 - obj.lives} ошибки</div>
    <span class="main-comparison">${obj.stat}</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

  const overGameElement = getElementFromTemplate(overGame);

  const replayButton = overGameElement.querySelector(`.main-replay`);
  replayButton.addEventListener(`click`, () => {
    updateScreen(welcomeScreenElement());
    goToStartInitialState();
  });

  return overGameElement;
}
