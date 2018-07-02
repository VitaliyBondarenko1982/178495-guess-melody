import AbstractView from "./abstractView";

export default class ConfirmView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<section class="modal-confirm modal-confirm__wrap" style="z-index: 2;">
      <form class="modal-confirm__inner">
        <button class="modal-confirm__close" type="button">Закрыть</button>
        <h2 class="modal-confirm__title">Подтверждение</h2>
        <p class="modal-confirm__text">Вы уверены что хотите начать игру заново?</p>
        <div class="modal-confirm__btn-wrap">
          <button class="modal-confirm__ok">Ок</button>
          <button class="modal-confirm__cancel">Отмена</button>
        </div>
      </form>
    </section>
    `;
  }

  bind() {
    this.modalWindow = this.element.querySelector(`.modal-confirm`);
    const okButton = this.element.querySelector(`.modal-confirm__ok`);
    okButton.addEventListener(`click`, () => {
      this.onStart();
    });

    const closeButton = this.element.querySelector(`.modal-confirm__close`);
    closeButton.addEventListener(`click`, () => {
      this.onCancel();
    });

    const cancelButton = this.element.querySelector(`.modal-confirm__cancel`);
    cancelButton.addEventListener(`click`, () => {
      this.onCancel();
    });
  }

  onStart() {

  }

  onCancel() {

  }
}
