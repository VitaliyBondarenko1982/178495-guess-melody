import {welcomeScreenElement} from './screen-welcome';

const getElementFromTemplate = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template;

  return wrapper.children[0];
};

const mainElement = document.querySelector(`section.main`);

const changeScreen = (screen) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(screen);
};

const playAgain = (elem) => {
  const playAgainButton = elem.querySelector(`.play-again`);

  playAgainButton.addEventListener(`click`, () => {
    changeScreen(welcomeScreenElement);
  });
};

const getRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};


export {getElementFromTemplate, changeScreen, playAgain, getRandomElement};
