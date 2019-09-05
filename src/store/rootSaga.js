import { all, fork } from 'redux-saga/effects';

import WeatherWidget from '../WeatherWidget/sagas';
import barrelWidgetSaga from '../BarrelWidget/sagas';
import actionsWidgetSaga from '../ActionsWidget/sagas';
import faqsWidgetSaga from '../FaqWidget/sagas';

export default function* rootSaga() {
  yield all([
    ...Object.values(WeatherWidget),
    ...Object.values(barrelWidgetSaga),
    ...Object.values(actionsWidgetSaga),
    ...Object.values(faqsWidgetSaga),
  ].map(fork));
}
