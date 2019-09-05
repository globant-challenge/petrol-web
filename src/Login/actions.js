import {
  LOGIN_USER,
} from './actionTypes';

function loginUser(params) {
  return {
    type: LOGIN_USER,
    payload: params,
  };
}

export {
  loginUser,
};
