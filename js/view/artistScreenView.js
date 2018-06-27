import AbstractView from "./abstractView";
import player from "../player";
// import renderHeaderTemplate from '../render/header';
// import {INITIAL_STATE} from '../data/data-game';

export default class ArtistView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    const answersArtist = (item, i) => {
      return `<div class="main-answer-wrapper" correct-answer="${item.correct}">
        <input class="main-answer-r" type="radio" id="answer-${i}" name="answer" value="val-${i}"/>
         <label class="main-answer" for="answer-${i}">
        <img class="main-answer-preview" src="${item.image}"
               alt="${item.artist}" width="134" height="134">
          ${item.artist}
       </label>
      </div>`;
    };

    return `<div class="main-wrap">
        <h2 class="title main-title">Кто исполняет эту песню?</h2>
        <div class="player-wrapper">
          <div class="player">
            <audio src="${this.level.audio}" autoplay></audio>
            <button class="player-control player-control--pause"></button>
            <div class="player-track">
              <span class="player-status"></span>
            </div>
          </div>
        </div>
        <form class="main-list">
        ${this.level.answers.map((answer, index) => answersArtist(answer, index)).join(``)}
        </form>
      </div>`;
  }

  bind() {
    const answerButtons = this.element.querySelectorAll(`.main-answer-wrapper`);
    const audioTrack = this.element.querySelector(`.player audio`);
    const playerControlButton = this.element.querySelector(`.player-control`);

    player(playerControlButton, audioTrack);

    [...answerButtons].forEach((answer) => {
      answer.addEventListener(`click`, (evt) => {
        this.onSwitch(evt);
      });
    });

  }

  onSwitch() {

  }
}
