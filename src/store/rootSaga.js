import { all, fork } from 'redux-saga/effects';

import WeatherWidget from '../WeatherWidget/sagas';
import BarrelWidgetSaga from '../BarrelWidget/sagas';


export default function* rootSaga() {
  yield all([
    ...Object.values(WeatherWidget),
    ...Object.values(BarrelWidgetSaga),
  ].map(fork));
}
