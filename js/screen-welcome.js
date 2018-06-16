import {getElementFromTemplate, changeScreen, updateScreen} from './utils';
import artistScreenElement from './screen-artist';
import headerElement from "./header";
import {initialState, levels} from './data-game';

export default () => {
  const welcomeScreen = `<section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p>
  </section>`;

  const welcomeScreenElement = getElementFromTemplate(welcomeScreen);
  const mainPlayButton = welcomeScreenElement.querySelector(`.main-play`);

  mainPlayButton.addEventListener(`click`, () => {
    initialState.level++;
    updateScreen(headerElement(initialState));
    changeScreen(artistScreenElement(levels[initialState.level]));
  });

  return welcomeScreenElement;
};
