import { all, fork } from 'redux-saga/effects';

import WeatherWidget from '../WeatherWidget/sagas';
import barrelWidgetSaga from '../BarrelWidget/sagas';
import actionsWidgetSaga from '../ActionsWidget/sagas';


export default function* rootSaga() {
  yield all([
    ...Object.values(WeatherWidget),
    ...Object.values(barrelWidgetSaga),
    ...Object.values(actionsWidgetSaga),
  ].map(fork));
}
