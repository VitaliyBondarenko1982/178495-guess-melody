import OverTimeView from '../view/overTimeScreenView';
import {changeScreen, goToStartInitialState} from '../utils';
import {INITIAL_STATE} from '../data/data-game';
// import welcomeScreen from './welcomeScreen';
import renderHeaderTemplate from './header';
import Router from "../router";

export default class OverTimeScreen {
  constructor(model) {
    this.model = model;
    this.content = new OverTimeView();
    this.root = changeScreen(this.content.element, renderHeaderTemplate(INITIAL_STATE));
  }

  get element() {
    return this.root;
  }

  showResult() {
    this.content.onSwitch = () => {
      Router.showWelcomeScreen();
      goToStartInitialState();
    };
  }

  init() {
    this.showResult();
  }
}
