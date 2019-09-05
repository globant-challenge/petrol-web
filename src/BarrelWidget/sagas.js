import { call, put, takeLatest } from 'redux-saga/effects';

import {
  getBarrelDataSuccess,
  getBarrelDataFail,
} from './actions';

import {
  GET_BARREL_DATA,
} from './actionTypes';

import {
  getBarrel,
} from './api';

function* getBarrelWorker({ payload: { params } }) {
  try {
    const payload = yield call(getBarrel, params);
    yield put(getBarrelDataSuccess(payload));
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