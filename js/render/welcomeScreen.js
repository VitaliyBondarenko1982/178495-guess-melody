import {changeScreen} from '../utils';
import WelcomeView from '../view/welcomeScreenView';
import Application from '../application';

export default class WelcomeScreen {
  constructor(model) {
    this.model = model;
    this.content = new WelcomeView();
    this.root = changeScreen(this.content.element);
    this.activateTimer = this.model.tick;
  }

  get element() {
    return this.root;
  }

  startGame() {
    this.content.onSwitch = () => {
      this.model.nextLevel();
      this.model.createTimer();
      this.activateTimer();
      if (this.model.getStartGame() === `artist`) {
        Application.showArtistScreen();
      } else {
        Application.showGenreScreen();
      }
    };
  }

  init() {
    this.startGame();
  }
}
