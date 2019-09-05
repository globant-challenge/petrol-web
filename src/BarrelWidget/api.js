import { axios } from 'axios';

export function getBarrel() {
  return axios.get('https://api.oilpriceapi.com/v1/prices/latest', {
    headers: {
      Authorization: 'Token 7027de2039f3b7abeae0706bf9a17bd6',
      ContentType: 'application/json',
    },
  })
  .then((res) => console.log(res))
  .catch((res) => console.log(res))
};