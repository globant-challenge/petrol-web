import {
  LOGIN_USER,
} from './actionTypes';

const defaultState = {
  errorMessage: null,
  fetching: false,
  user: {},
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};
