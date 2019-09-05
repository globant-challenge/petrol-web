import { all, fork } from 'redux-saga/effects';

import WeatherWidget from '../components/WeatherWidget/sagas';


export default function* rootSaga() {
  yield all([
    ...Object.values(WeatherWidget),
  ].map(fork));
}
