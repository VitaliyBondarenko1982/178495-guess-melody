import OverAttemptsView from '../view/overAttemptsScreenView';
import {changeScreen} from '../utils';
import {INITIAL_STATE} from '../data/data-game';
import renderHeaderTemplate from './header';
import Application from '../application';

export default class OverAttemptsScreen {
  constructor(model) {
    this.model = model;
    this.content = new OverAttemptsView();
    this.root = changeScreen(this.content.element, renderHeaderTemplate(INITIAL_STATE));
  }

  get element() {
    return this.root;
  }

  showResult() {
    this.content.onSwitch = () => {
      this.model.goToStartInitialState();
      Application.showWelcomeScreen();
    };
  }

  init() {
    this.showResult();
  }
}
