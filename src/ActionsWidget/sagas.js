import { call, put, takeLatest } from 'redux-saga/effects';
import { takeRight } from 'lodash';

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
    const actions = takeRight(payload.results, 6);
    console.log(actions);
    yield put(getActionsSuccess(actions));
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