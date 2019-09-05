import {
  GET_FAQS,
  GET_FAQS_SUCCESS,
  GET_FAQS_FAIL,
  DELETE_FAQS_FAIL,
  DELETE_FAQS_SUCCESS,
  DELETE_FAQS,
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

export {
  getFaqs,
  getFaqsFail,
  getFaqsSuccess,
  deleteFaqs,
  deleteFaqsSuccess,
  deleteFaqsFail,
};