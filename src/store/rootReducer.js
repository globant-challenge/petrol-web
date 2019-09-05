import { combineReducers } from 'redux';
// import weather from '../components/Weather/reducer';

const appReducer = combineReducers({
  // weather,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
