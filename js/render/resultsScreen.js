import ResultsView from '../view/resultsScreenView';
import {changeScreen} from '../utils';
import renderHeaderTemplate from './header';
import Application from '../application';
import {INITIAL_STATE} from '../data/data-game';

export default class ResultsScreen {
  constructor(model) {
    this._model = model;
    this._content = new ResultsView(this._model.currentState);
    this.root = changeScreen(this._content.element, renderHeaderTemplate(INITIAL_STATE));

  }

  get element() {
    return this.root;
  }

  onStart() {
    this._content.onSwitch = () => {
      this.model.goToStartInitialState();
      Application.showWelcomeScreen();
    };
  }


  init() {
    this.onStart();
  }
}
