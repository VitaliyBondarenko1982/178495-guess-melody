import {initialState} from './data-game';

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
  initialState.points = 0;
  initialState.lives = 3;
  initialState.time = 300;
  initialState.level = 0;
};
