import {
  GET_ACTIONS,
  GET_ACTIONS_SUCCESS,
  GET_ACTIONS_FAIL,
  GET_ACTIONS_HIS,
  GET_ACTIONS_HIS_SUCCESS,
  GET_ACTIONS_HIS_FAIL,
} from './actionTypes';

const defaultState = {
  errorMessage: null,
  fetching: false,
  price: undefined,
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_ACTIONS_HIS:
      return {
        ...state,
        fetching: true,
      };
    case GET_ACTIONS_HIS_FAIL:
      return {
        ...state,
        errorMessage: payload,
        fetching: false,
      };
    case GET_ACTIONS_HIS_SUCCESS:
      return {
        ...state,
        categories: payload.categories,
        data: payload.data,
        fetching: false,
      };
      case GET_ACTIONS:
      return {
        ...state,
        fetching: true,
      };
    case GET_ACTIONS_FAIL:
      return {
        ...state,
        errorMessage: payload,
        fetching: false,
      };
    case GET_ACTIONS_SUCCESS:
      return {
        ...state,
        historicals: payload,
        price: payload[0].price,
        fetching: false,
      };
    default:
      return state;
  }
};
