import {
  GET_ACTIONS,
  GET_ACTIONS_SUCCESS,
  GET_ACTIONS_FAIL,
} from './actionTypes';

function getActions(payload) {
  return {
    type: GET_ACTIONS,
    payload,
  };
}

function getActionsSuccess(payload) {
  return {
    type: GET_ACTIONS_SUCCESS,
    payload,
  };
}

function getActionsFail(payload) {
  return {
    type: GET_ACTIONS_FAIL,
    payload,
  };
}

export {
  getActions,
  getActionsSuccess,
  getActionsFail,
};