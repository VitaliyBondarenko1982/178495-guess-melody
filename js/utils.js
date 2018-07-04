export const render = (str) => {
  const template = document.createElement(`template`);
  template.innerHTML = str.trim();

  return template.content;
};

const mainElement = document.querySelector(`.main`);
const app = document.querySelector(`.app`);

export const changeScreen = (element, header = document.createDocumentFragment()) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(header);
  mainElement.appendChild(element);
};

export const goToStartInitialState = (state) => {
  state.points = 0;
  state.lives = 3;
  state.time = 300;
  state.level = 0;
  state.fastAnswers = 0;
  state.results = [];
};

export const createModal = (element) => {
  app.insertBefore(element, mainElement);
};

export const removeModal = (element) => {
  app.removeChild(element);
};

export const compareArrays = (arr1, arr2) => {
  return arr1.length === arr2.length && arr1.every((item, idx) => item === arr2[idx]);
};
