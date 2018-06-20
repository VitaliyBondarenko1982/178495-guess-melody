import OverAttemptsView from './overAttemptsScreenView';
import {changeScreen, goToStartInitialState} from './utils';
import {INITIAL_STATE} from './data-game';
import welcomeScreen from './welcomeScreen';
import renderHeaderTemplate from './header';

export default () => {
  const overAttemptsView = new OverAttemptsView();

  changeScreen(overAttemptsView.element, renderHeaderTemplate(INITIAL_STATE));

  overAttemptsView.onSwitch = () => {
    welcomeScreen(INITIAL_STATE);
    goToStartInitialState();
  };
};
