import {
  GET_BARREL_DATA,
  GET_BARREL_DATA_SUCCESS,
  GET_BARREL_DATA_FAIL,
} from './actionTypes';

function getBarrelData(payload) {
  return {
    type: GET_BARREL_DATA,
    payload,
  };
}

function getBarrelDataSuccess(payload) {
  return {
    type: GET_BARREL_DATA_SUCCESS,
    payload,
  };
}

function getBarrelDataFail(payload) {
  return {
    type: GET_BARREL_DATA_FAIL,
    payload,
  };
}

export {
  getBarrelData,
  getBarrelDataSuccess,
  getBarrelDataFail,
};