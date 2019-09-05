import { call, put, takeLatest } from 'redux-saga/effects';

import {
  getFaqsFail,
  getFaqsSuccess,
} from './actions';

import {
  GET_FAQS,
} from './actionTypes';

import {
  getFaqs,
} from './api';

function* getFaqssWorker() {
  try {
    const payload = yield call(getFaqs);
    yield put(getFaqsSuccess(payload));
  } catch ({ message }) {
    yield put(getFaqsFail(message));
  }
}

export function* getFaqsWatcher() {
  yield takeLatest(GET_FAQS, getFaqssWorker);
}

export default {
  getFaqsWatcher,
};