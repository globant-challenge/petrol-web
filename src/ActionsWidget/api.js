import axios from 'axios';

export function getActions() {
  return axios.get('https://financialmodelingprep.com/api/v3/stock/real-time-price/ec')
  .then((data) => data)
  .catch((res) => res)
};