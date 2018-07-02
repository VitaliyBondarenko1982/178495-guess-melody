import AbstractView from './abstractView';

export default class ResultsView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">Подождите, результаты загружаются.....</h2>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
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
