import {
  GET_FAQS,
  GET_FAQS_SUCCESS,
  GET_FAQS_FAIL
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

export {
  getFaqs,
  getFaqsFail,
  getFaqsSuccess,
};