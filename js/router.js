import GameModel from './gameModel';
import WelcomeScreen from './render/welcomeScreen';
import ArtistScreen from './render/artistScreen';
import GenreScreen from './render/genreScreen';
import OverAttemptsScreen from './render/overAttemptsScreen';
import ConfirmScreen from './render/confirmScreen';
import OverTimeScreen from './render/overTimeScreen';
import OverGameScreen from './render/overGameScreen';
// import {INITIAL_STATE} from "./data/data-game";
import {createModal} from './utils';
import ErrorView from './view/errorView';
import {adaptServerData} from './data/data-adapter';


const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}`);
  }
};

let gameData;
export default class Router {
  static load() {
    this.gameData = ``;
    window.fetch(`https://es.dump.academy/guess-melody/questions`)
     .then(checkStatus)
     .then((response) => response.json())
     .then((data) => {
       this.gameData = adaptServerData(data);
       return gameData;
     })
     .then(() => {
       Router.showWelcomeScreen();
     })
     .catch(Router.showErrorModal);
  }

  static showWelcomeScreen() {
    this.model = new GameModel(this.gameData);
    const welcomeScreen = new WelcomeScreen(this.model);
    welcomeScreen.init();
  }

  static showArtistScreen() {
    // const model = new GameModel(INITIAL_STATE, gameData);
    const artistScreen = new ArtistScreen(this.model);
    artistScreen.init();
  }

  static showGenreScreen() {
    // const model = new GameModel(INITIAL_STATE, gameData);
    const genreScreen = new GenreScreen(this.model);
    genreScreen.init();
  }

  static showOverAttemptsScreen() {
    // const model = new GameModel(INITIAL_STATE, gameData);
    const overAttemptsScreen = new OverAttemptsScreen(this.model);
    overAttemptsScreen.init();
  }

  static showOverTimeScreen() {
    // const model = new GameModel(INITIAL_STATE, gameData);
    const overTimeScreen = new OverTimeScreen(this.model);
    overTimeScreen.init();
  }

  static showOverGameScreen() {
    // const model = new GameModel(INITIAL_STATE, gameData);
    const overGameScreen = new OverGameScreen(this.model, this.model.getPlayerResult());
    overGameScreen.init();
  }

  static showConfirmScreen() {
    // const model = new GameModel(INITIAL_STATE);
    const confirmScreen = new ConfirmScreen(this.model);
    confirmScreen.init();
  }

  static showErrorModal(error) {
    const errorModal = new ErrorView(error);
    createModal(errorModal.element);
  }
}
