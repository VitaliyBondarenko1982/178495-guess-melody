import {getElementFromTemplate, updateScreen, goToStartInitialState} from './utils';
import welcomeScreenElement from './screen-welcome';

export default function renderOverTime() {
  const overTime = `
    <section class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <h2 class="title">Увы и ах!</h2>
      <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
      <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
    </section>
  `;

  const overTimeElement = getElementFromTemplate(overTime);

  const replayButton = overTimeElement.querySelector(`.main-replay`);
  replayButton.addEventListener(`click`, () => {
    updateScreen(welcomeScreenElement());
    goToStartInitialState();
  });

  return overTimeElement;
}
