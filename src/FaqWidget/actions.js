import {
  GET_FAQS,
  GET_FAQS_SUCCESS,
  GET_FAQS_FAIL,
  DELETE_FAQS_FAIL,
  DELETE_FAQS_SUCCESS,
  DELETE_FAQS,
  ADD_FAQS,
  ADD_FAQS_SUCCESS,
  ADD_FAQS_FAIL,
} from './actionTypes';

function getFaqs() {
  return {
    type: GET_FAQS,
  };
}

function getFaqsSuccess(payload) {
  return {
    type: GET_FAQS_SUCCESS,
    payload,
  };
}

function getFaqsFail() {
  return {
    type: GET_FAQS_FAIL,
  };
}

function deleteFaqs(id) {
  return {
    type: DELETE_FAQS,
    payload: { id },
  };
}

function deleteFaqsSuccess(payload) {
  return {
    type: DELETE_FAQS_SUCCESS,
    payload,
  };
}

function deleteFaqsFail() {
  return {
    type: DELETE_FAQS_FAIL,
  };
}

function addFaqs(ask, answ) {
  return {
    type: ADD_FAQS,
    payload: { ask, answ },
  };
}

function addFaqsSuccess(payload) {
  return {
    type: ADD_FAQS_SUCCESS,
    payload,
  };
}

function addFaqsFail() {
  return {
    type: ADD_FAQS_FAIL,
  };
}

export {
  getFaqs,
  getFaqsFail,
  getFaqsSuccess,
  deleteFaqs,
  deleteFaqsSuccess,
  deleteFaqsFail,
  addFaqs,
  addFaqsSuccess,
  addFaqsFail,
};