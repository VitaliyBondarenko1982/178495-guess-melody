import OverTimeView from './overTimeScreenView';
import {changeScreen, goToStartInitialState} from './utils';
import {INITIAL_STATE} from './data-game';
import welcomeScreen from './welcomeScreen';
import renderHeaderTemplate from './header';

export default () => {
  const overTimeView = new OverTimeView();

  changeScreen(overTimeView.element, renderHeaderTemplate(INITIAL_STATE));

  overTimeView.onSwitch = () => {
    welcomeScreen(INITIAL_STATE);
    goToStartInitialState();
  };
};
