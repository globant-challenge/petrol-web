import { combineReducers } from 'redux';
import weatherWidget from '../WeatherWidget/reducer';
import barrelWidget from '../BarrelWidget/reducer';

const appReducer = combineReducers({
  weatherWidget,
  barrelWidget,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
