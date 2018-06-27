import OverGameView from '../view/overGameScreenView';
import {changeScreen, goToStartInitialState} from '../utils';
import {INITIAL_STATE} from '../data/data-game';
// import welcomeScreen from './welcomeScreen';
import renderHeaderTemplate from './header';
import Router from "../router";

export default class OverGameScreen {
  constructor(model, obj) {
    this.model = model;
    this.obj = obj;
    this.content = new OverGameView(obj);
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
