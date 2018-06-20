import {changeScreen} from './utils';
import renderArtistScreen from './artistScreen';
import WelcomeView from "./welcomeScreenView";


export default (state) => {
  const welcomeView = new WelcomeView();
  changeScreen(welcomeView.element);

  welcomeView.onSwitch = () => {
    state.level++;
    renderArtistScreen(state);
  };
};
