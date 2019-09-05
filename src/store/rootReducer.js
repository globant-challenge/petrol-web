import { combineReducers } from 'redux';
import WeatherWidget from '../WeatherWidget/reducer';
import barrelWidget from '../BarrelWidget/reducer';

const appReducer = combineReducers({
  WeatherWidget,
  barrelWidget,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
