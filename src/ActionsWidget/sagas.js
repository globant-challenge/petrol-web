import { call, put, takeLatest } from 'redux-saga/effects';

import {
  getActionsSuccess,
  getActionsFail,
} from './actions';

import {
  GET_ACTIONS,
} from './actionTypes';

import {
  getActions,
} from './api';

function* getActionsWorker() {
  try {
    const payload = yield call(getActions);
    yield put(getActionsSuccess(payload.data));
  } catch ({ message }) {
    yield put(getActionsFail(message));
  }
}

export function* getActionsWatcher() {
  yield takeLatest(GET_ACTIONS, getActionsWorker);
}

export default {
  getActionsWatcher,
};