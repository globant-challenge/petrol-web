import {
  GET_ACTIONS,
  GET_ACTIONS_SUCCESS,
  GET_ACTIONS_FAIL,
  GET_ACTIONS_HIS,
  GET_ACTIONS_HIS_FAIL,
  GET_ACTIONS_HIS_SUCCESS,
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

function getActionsHistorical(payload) {
  return {
    type: GET_ACTIONS_HIS,
    payload,
  };
}

function getActionsHistoricalSuccess(payload) {
  return {
    type: GET_ACTIONS_HIS_SUCCESS,
    payload,
  };
}

function getActionsHistoricalFail(payload) {
  return {
    type: GET_ACTIONS_HIS_FAIL,
    payload,
  };
}

export {
  getActions,
  getActionsSuccess,
  getActionsFail,
  getActionsHistorical,
  getActionsHistoricalSuccess,
  getActionsHistoricalFail,
};