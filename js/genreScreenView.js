
import AbstractView from "./abstractView";
import player from "./player";

export default class GenreView extends AbstractView {
  constructor(level) {
    super();
    this.level = level;
  }

  get template() {
    const answersGenre = (item, i) => {
      return `<div class="genre-answer">
            <div class="player-wrapper">
              <div class="player">
                <audio src = "${item.audio}" ${item.autoplay ? `autoplay` : ``}></audio>
                <button class="player-control player-control ${item.autoplay ? `player-control--pause` : `player-control--play`}"></button>
                <div class="player-track">
                  <span class="player-status"></span>
                </div>
              </div>
            </div>
            <input type="checkbox" name="answer" value="answer-${i}" id="a-${i}" correct-answer="${item.correct}">
            <label class="genre-answer-check" for="a-${i}"></label>
          </div>`;
    };

    return `<div class="main-wrap">
        <h2 class="title">Выберите ${this.level.genre} треки</h2>
        <form class="genre">
        ${this.level.answers.map((answer, index) => answersGenre(answer, index)).join(``)}
          <button class="genre-answer-send" type="submit">Ответить</button>
        </form>
      </div>`;
  }

  bind() {
    const genreAnswerButton = this.element.querySelector(`.genre-answer-send`);
    genreAnswerButton.disabled = `true`;
    const inputElements = Array.from(this.element.querySelectorAll(`.genre-answer input[type="checkbox"]`));
    const playerControlButtons = this.element.querySelectorAll(`.player-control`);
    inputElements.forEach((input) => {
      input.addEventListener(`change`, () => {
        const checkedInput = inputElements.some((it) => it.checked);

        genreAnswerButton.disabled = !checkedInput;
      });
    });

    [...playerControlButtons].forEach((elem) => {
      let audio = elem.previousElementSibling;
      player(elem, audio);
    });

    genreAnswerButton.addEventListener(`click`, (evt) => {
      this.onSwitch(evt, inputElements);
    });
  }

  onSwitch() {

  }
}
