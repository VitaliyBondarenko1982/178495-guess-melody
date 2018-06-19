import {INITIAL_STATE} from './data-game';

export const getElementFromTemplate = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();

  return wrapper;
};

const mainElement = document.querySelector(`.main`);

export const changeScreen = (screen) => {
  let collection = screen.children;
  [...collection].map((element) => {
    mainElement.appendChild(element);
  });
};

export const updateScreen = (element) => {
  mainElement.innerHTML = ``;
  let collection = element.children;
  [...collection].map((el) => {
    mainElement.appendChild(el);
  });
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
