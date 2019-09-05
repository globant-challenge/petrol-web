import { combineReducers } from 'redux';
import weatherWidget from '../WeatherWidget/reducer';
import barrelWidget from '../BarrelWidget/reducer';
import actionsWidget from '../ActionsWidget/reducer';

const appReducer = combineReducers({
  actionsWidget,
  weatherWidget,
  barrelWidget,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
