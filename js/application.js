import GameModel from './gameModel';
import WelcomeScreen from './render/welcomeScreen';
import ArtistScreen from './render/artistScreen';
import GenreScreen from './render/genreScreen';
import OverAttemptsScreen from './render/overAttemptsScreen';
import ConfirmScreen from './render/confirmScreen';
import OverTimeScreen from './render/overTimeScreen';
import OverGameScreen from './render/overGameScreen';
import {createModal} from './utils';
import ErrorView from './view/errorView';
import {adaptServerData} from './data/data-adapter';
import Loader from './loader';
import ResultsScreen from './render/resultsScreen';

let gameData;
export default class Application {
  static load() {
    this.gameData = ``;
    Loader.loadData()
     .then((data) => {
       this.gameData = adaptServerData(data);
       return gameData;
     })
     .then(() => {
       Application.showWelcomeScreen();
     })
     .catch(Application.showErrorModal);
  }

  static showWelcomeScreen() {
    this.model = new GameModel(this.gameData);
    const welcomeScreen = new WelcomeScreen(this.model);
    welcomeScreen.init();
  }

  static showArtistScreen() {
    const artistScreen = new ArtistScreen(this.model);
    artistScreen.init();
  }

  static showGenreScreen() {
    const genreScreen = new GenreScreen(this.model);
    genreScreen.init();
  }

  static showOverAttemptsScreen() {
    const overAttemptsScreen = new OverAttemptsScreen(this.model);
    overAttemptsScreen.init();
  }

  static showOverTimeScreen() {
    const overTimeScreen = new OverTimeScreen(this.model);
    overTimeScreen.init();
  }

  static showOverGameScreen(data) {
    const overGameScreen = new OverGameScreen(this.model, this.model.getPlayerResult(data));
    overGameScreen.init();
  }

  static showConfirmScreen() {
    const confirmScreen = new ConfirmScreen(this.model);
    confirmScreen.init();
  }

  static showErrorModal(error) {
    const errorModal = new ErrorView(error);
    createModal(errorModal.element);
  }

  static showStatisticScreen() {
    this.allResults = [];
    const loadFinalResult = new ResultsScreen(this.model);
    loadFinalResult.init();
    this.model.getPlayerResult();
    Loader.saveResults({score: this.model.state.points})
      .catch(Application.showError);
    Loader.loadResults()
      .then((data) => {
        data.forEach((elem) => {
          this.allResults.push(elem.score);
        });
        Application.showOverGameScreen(this.allResults);
      })
      .catch(Application.showError);
  }
}
