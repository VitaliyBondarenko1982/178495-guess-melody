import OverAttemptsView from '../view/overAttemptsScreenView';
import {changeScreen} from '../utils';
import {INITIAL_STATE} from '../data/data-game';
// import welcomeScreen from './welcomeScreen';
import renderHeaderTemplate from './header';
import Router from "../router";

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
      Router.showWelcomeScreen();
    };
  }

  init() {
    this.showResult();
  }
}
