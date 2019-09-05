import { call, put, takeLatest, delay } from 'redux-saga/effects';

import {
  getBarrelData,
  getBarrelDataSuccess,
  getBarrelDataFail,
} from './actions';

import {
  GET_BARREL_DATA,
} from './actionTypes';

import {
  getBarrel,
} from './api';

function* getBarrelWorker() {
  try {
    const payload = yield call(getBarrel);
    yield put(getBarrelDataSuccess(payload.data));
    yield delay(60000);
    yield put(getBarrelData());
  } catch ({ message }) {
    yield put(getBarrelDataFail(message));
  }
}

export function* getBarrelWatcher() {
  yield takeLatest(GET_BARREL_DATA, getBarrelWorker);
}

export default {
  getBarrelWatcher,
};