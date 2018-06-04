import {welcomeScreenElement} from './screen-welcome';
import {changeScreen} from './utils';

changeScreen(welcomeScreenElement);

// const LEFT_ARROW = 37;
// const RIGHT_ARROW = 39;
//
// const app = document.querySelector(`.app`);
// const mainElement = document.querySelector(`.main`);
//
// const selectScreen = (element) => {
//   mainElement.innerHTML = ``;
//   mainElement.appendChild(element.cloneNode(true));
// };
//
// const template = document.querySelector(`template`);
// const screens = Array.from(template.content.querySelectorAll(`section.main`)).map((it) => it.cloneNode(true));
//
// let currentScreen = 0;
// const select = (index) => {
//   index = index < 0 ? screens.length - 1 : index;
//   index = index >= screens.length ? 0 : index;
//   currentScreen = index;
//   selectScreen(screens[currentScreen]);
// };
// select(0);
//
//
// document.addEventListener(`keydown`, (evt) => {
//   switch (evt.keyCode) {
//     case RIGHT_ARROW:
//       select(currentScreen + 1);
//       break;
//     case LEFT_ARROW:
//       select(currentScreen - 1);
//       break;
//   }
// });
//
// const createArrows = `<div class="arrows__wrap">
// <style>
// .arrows__wrap {
//   position: absolute;
//   top: 135px;
//   left: 50%;
//   margin-left: -56px;
// }
// .arrows__btn {
//   background: none;
//   border: 2px solid black;
//   padding: 5px 20px;
// }
// </style>
// <button id="previous-button" class="arrows__btn"><-</button>
// <button id="next-button" class="arrows__btn">-></button>
// </div>`;
//
// app.insertAdjacentHTML(`beforeend`, createArrows);
//
// document.querySelector(`#previous-button`).addEventListener(`click`, function () {
//   select(currentScreen - 1);
// });
//
// document.querySelector(`#next-button`).addEventListener(`click`, function () {
//   select(currentScreen + 1);
// });
