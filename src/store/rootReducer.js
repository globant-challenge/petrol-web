import { combineReducers } from 'redux';
import WeatherWidget from '../WeatherWidget/reducer';

const appReducer = combineReducers({
  WeatherWidget,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
