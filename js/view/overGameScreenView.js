import AbstractView from "./abstractView";

export default class OverGameView extends AbstractView {
  constructor(result) {
    super();
    this.result = result;
  }

  get template() {
    return `<section class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <h2 class="title">Вы настоящий меломан!</h2>
      <div class="main-stat">За&nbsp;${4 - this.result.currentTime.min}&nbsp;минуты и ${60 - this.result.currentTime.sec}&nbsp;секунд
        <br>вы&nbsp;набрали ${this.result.points} баллов (${this.result.fastAnswers} быстрых)
        <br>совершив ${3 - this.result.lives} ошибки</div>
      <span class="main-comparison">${this.result.stat}</span>
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </section>`;
  }

  bind() {
    const replayButton = this.element.querySelector(`.main-replay`);
    replayButton.addEventListener(`click`, () => {
      this.onSwitch();
    });
  }

  onSwitch() {

  }
}
