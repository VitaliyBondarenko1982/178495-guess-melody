import GameModel from "./gameModel";
import WelcomeScreen from "./render/welcomeScreen";
import ArtistScreen from "./render/artistScreen";
import GenreScreen from "./render/genreScreen";
import OverAttemptsScreen from "./render/overAttemptsScreen";
import OverTimeScreen from "./render/overTimeScreen";
import OverGameScreen from "./render/overGameScreen";
import {INITIAL_STATE} from "./data/data-game";

export default class Router {
  static showWelcomeScreen() {
    const model = new GameModel(INITIAL_STATE);
    const welcomeScreen = new WelcomeScreen(model);
    welcomeScreen.init();
  }

  static showArtistScreen() {
    const model = new GameModel(INITIAL_STATE);
    const artistScreen = new ArtistScreen(model);
    artistScreen.init();
  }

  static showGenreScreen() {
    const model = new GameModel(INITIAL_STATE);
    const genreScreen = new GenreScreen(model);
    genreScreen.init();
  }

  static showOverAttemptsScreen() {
    const model = new GameModel(INITIAL_STATE);
    const overAttemptsScreen = new OverAttemptsScreen(model);
    overAttemptsScreen.init();
  }

  static showOverTimeScreen() {
    const model = new GameModel(INITIAL_STATE);
    const overTimeScreen = new OverTimeScreen(model);
    overTimeScreen.init();
  }

  static showOverGameScreen() {
    const model = new GameModel(INITIAL_STATE);
    const overGameScreen = new OverGameScreen(model, model.getPlayerResult());
    overGameScreen.init();
  }
}
