import OverGameView from './overGameScreenView';
import {changeScreen, goToStartInitialState} from './utils';
import {INITIAL_STATE} from './data-game';
import welcomeScreen from './welcomeScreen';
import renderHeaderTemplate from './header';

export default (obj) => {
  const overGameView = new OverGameView(obj);

  changeScreen(overGameView.element, renderHeaderTemplate(INITIAL_STATE));

  overGameView.onSwitch = () => {
    welcomeScreen(INITIAL_STATE);
    goToStartInitialState();
  };
};
