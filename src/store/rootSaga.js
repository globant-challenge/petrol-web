import { all, fork } from 'redux-saga/effects';

import WeatherWidget from '../WeatherWidget/sagas';


export default function* rootSaga() {
  yield all([
    ...Object.values(WeatherWidget),
  ].map(fork));
}
