import OverGameView from '../view/overGameScreenView';
import {changeScreen} from '../utils';
import {INITIAL_STATE} from '../data/data-game';
import renderHeaderTemplate from './header';
import Application from '../application';

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
      this.model.goToStartInitialState();
      Application.showWelcomeScreen();
    };
  }

  init() {
    this.showResult();
  }
}
