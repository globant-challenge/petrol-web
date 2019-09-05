import { call, put, takeLatest } from 'redux-saga/effects';

import {
  getActionsSuccess,
  getActionsFail,
  getActionsHistoricalSuccess,
  getActionsHistoricalFail,
} from './actions';

import {
  GET_ACTIONS, GET_ACTIONS_HIS,
} from './actionTypes';

import {
  getActions,
  getActionsHistorical,
} from './api';

function* getActionsWorker() {
  try {
    const payload = yield call(getActions);
    yield put(getActionsSuccess(payload));
  } catch ({ message }) {
    yield put(getActionsFail(message));
  }
}

export function* getActionsWatcher() {
  yield takeLatest(GET_ACTIONS, getActionsWorker);
}

function* getActionsHisWorker() {
  try {
    const payload = yield call(getActionsHistorical);
    const keys = Object.keys(payload.history);
    const values = Object.values(payload.history);
    yield put(getActionsHistoricalSuccess({ categories: keys, data: values }));
  } catch ({ message }) {
    yield put(getActionsHistoricalFail(message));
  }
}

export function* getActionsHisWatcher() {
  yield takeLatest(GET_ACTIONS_HIS, getActionsHisWorker);
}

export default {
  getActionsWatcher,
  getActionsHisWatcher,
};