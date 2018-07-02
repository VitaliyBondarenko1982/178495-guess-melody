import ConfirmView from '../view/confirmScreenView';
import {createModal, removeModal} from '../utils';
import Application from '../application';


export default class ConfirmScreen {
  constructor(model) {
    this.model = model;
    this.content = new ConfirmView();
    this.root = createModal(this.content.element);
  }

  get element() {
    return this.root;
  }

  closeConfirm() {
    this.content.onStart = () => {
      removeModal(this.content.modalWindow);
      this.model.goToStartInitialState();
      Application.showWelcomeScreen();
    };
    this.content.onCancel = () => {
      removeModal(this.content.modalWindow);
    };
  }

  init() {
    this.closeConfirm();
  }
}
