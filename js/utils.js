import {INITIAL_STATE} from './data-game';

export const render = (str) => {
  const template = document.createElement(`template`);
  template.innerHTML = str.trim();

  return template.content;
};

const mainElement = document.querySelector(`.main`);

export const changeScreen = (element, header = document.createDocumentFragment()) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(header);
  mainElement.appendChild(element);
};

export const goToStartInitialState = () => {
  INITIAL_STATE.points = 0;
  INITIAL_STATE.lives = 3;
  INITIAL_STATE.time = 300;
  INITIAL_STATE.level = 0;
};

export const compareArrays = (arr, arr2) => {
  let on = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr2[i]) {
      on++;
    }
  }
  return on === arr.length ? true : false;
};
