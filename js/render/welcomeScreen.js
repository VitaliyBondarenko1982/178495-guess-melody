import {changeScreen} from '../utils';
// import ArtistScreen from './artistScreen';
import WelcomeView from "../view/welcomeScreenView";
// import GameModel from "../gameModel";
import Router from '../router';

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
      if (this.model.getFirstLevel() === `artist`) {
        Router.showArtistScreen();
      } else {
        Router.showGenreScreen();
      }
    };
  }

  init() {
    this.startGame();
  }
}
