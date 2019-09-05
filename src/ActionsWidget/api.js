import axios from 'axios';

// https://financialmodelingprep.com/api/v3/stock/real-time-price/ec
export function getActions() {
  return axios.get('https://marketdata.websol.barchart.com/getHistory.json?apikey=9888569b2ac726df33261665edaf0697&symbol=EC&type=daily&startDate=20170320000000')
  .then(({ data }) => data)
  .catch((res) => res)
};