import { call, put, takeLatest } from 'redux-saga/effects';

import {
  getWeatherFail,
  getWeatherSuccess,
} from './actions';

import {
  GET_WEATHER,
} from './actionTypes';

import {
  getWeather,
} from './api';

function* getWeatherWorker({ payload: { lat, lon } }) {
  try {
    const payload = yield call(getWeather, lat, lon);
    yield put(getWeatherSuccess(payload));
  } catch ({ message }) {
    yield put(getWeatherFail(message));
  }
}

export function* getWeatherWatcher() {
  yield takeLatest(GET_WEATHER, getWeatherWorker);
}

export default {
  getWeatherWatcher,
};
