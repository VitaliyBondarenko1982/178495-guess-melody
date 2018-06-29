import ConfirmView from '../view/confirmScreenView';
import {changeScreen} from '../utils';
import {INITIAL_STATE} from '../data/data-game';
import renderHeaderTemplate from './header';
import Router from "../router";


export default class ConfirmScreen {
  constructor(model) {
    this.model = model;
    this.content = new ConfirmView();
    this.root = changeScreen(this.content.element, renderHeaderTemplate(INITIAL_STATE));
  }

  get element() {
    return this.root;
  }

  goToStart() {
    this.content.onStart = () => {
      this.model.goToStartInitialState();
      Router.showWelcomeScreen();
    };
  }
  // cancelConfirm() {
  //   this.content.onSwitch = () => {
  //
  //   };
  // }

  init() {
    this.goToStart();
  }
}
