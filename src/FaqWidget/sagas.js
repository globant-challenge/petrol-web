import { call, put, takeLatest } from 'redux-saga/effects';

import {
  getFaqs as getFaqsAction,
  getFaqsFail,
  getFaqsSuccess,
  deleteFaqsSuccess,
  deleteFaqsFail,
  addFaqsSuccess,
  addFaqsFail,
} from './actions';

import {
  GET_FAQS,
  DELETE_FAQS,
  ADD_FAQS,
} from './actionTypes';

import {
  getFaqs,
  deleteFaqs,
  addFaqs,
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

function* deleteFaqsWorker({ payload }) {
  try {
    const data = yield call(deleteFaqs, payload.id);
    yield put(deleteFaqsSuccess(data));
    yield put(getFaqsAction());
  } catch ({ message }) {
    yield put(deleteFaqsFail(message));
  }
}

export function* deleteFaqsWatcher() {
  yield takeLatest(DELETE_FAQS, deleteFaqsWorker);
}

function* addFaqsWorker({ payload }) {
  try {
    const { ask, answ } = payload;
    const data = yield call(addFaqs, ask, answ);
    yield put(addFaqsSuccess(data));
    yield put(getFaqsAction());
  } catch ({ message }) {
    yield put(addFaqsFail(message));
  }
}

export function* addFaqsWatcher() {
  yield takeLatest(ADD_FAQS, addFaqsWorker);
}

export default {
  getFaqsWatcher,
  deleteFaqsWatcher,
  addFaqsWatcher,
};