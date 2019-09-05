import {
  GET_FAQS,
  GET_FAQS_SUCCESS,
  GET_FAQS_FAIL,
} from './actionTypes';

const defaultState = {
  errorMessage: null,
  fetching: false,
  faqs: [],
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_FAQS:
      return {
        ...state,
        fetching: true,
      };
    case GET_FAQS_FAIL:
      return {
        ...state,
        errorMessage: payload,
        fetching: false,
      };
    case GET_FAQS_SUCCESS:
      return {
        ...state,
        faqs: payload,
        fetching: false,
      };
    default:
      return state;
  }
};
