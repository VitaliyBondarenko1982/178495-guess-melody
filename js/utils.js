import {welcomeScreenElement} from './screen-welcome';

export const getElementFromTemplate = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template;

  return wrapper.children[0];
};

const mainElement = document.querySelector(`section.main`);

export const changeScreen = (screen) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(screen);
};

export const playAgain = (elem) => {
  const playAgainButton = elem.querySelector(`.play-again`);

  playAgainButton.addEventListener(`click`, () => {
    changeScreen(welcomeScreenElement);
  });
};

export const getRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
