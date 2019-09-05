import axios from 'axios';

export function getActions() {
  return axios.get('https://api.worldtradingdata.com/api/v1/stock?symbol=EC&api_token=psCWFvrUPYRjTlsSqACdaRTDNB3JUqTOH8hVmsJvJLE0FqSgKRLIe0eSF9vZ')
  .then(({ data }) => data.data)
  .catch((res) => res)
};

export function getActionsHistorical() {
  return axios.get('https://api.worldtradingdata.com/api/v1/history?symbol=EC&sort=newest&api_token=psCWFvrUPYRjTlsSqACdaRTDNB3JUqTOH8hVmsJvJLE0FqSgKRLIe0eSF9vZ&date_from=2019-08-15&date_to=2019-09-05')
  .then(({ data }) => data)
  .catch((res) => res)
};