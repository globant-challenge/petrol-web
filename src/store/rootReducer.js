import { combineReducers } from 'redux';
import weatherWidget from '../WeatherWidget/reducer';
import barrelWidget from '../BarrelWidget/reducer';
import actionsWidget from '../ActionsWidget/reducer';
import faqsWidget from '../FaqWidget/reducer';

const appReducer = combineReducers({
  actionsWidget,
  weatherWidget,
  barrelWidget,
  faqsWidget,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
