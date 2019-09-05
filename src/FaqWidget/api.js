import axios from 'axios';

export function getFaqs() {
  return axios.get('http://ecdwapp01.azurewebsites.net/api/questions', {
    headers: {
      'content-Type': 'application/x-www-form-urlencoded',
    },
  })
  .then((data) => console.log(data))
  .catch((res) => res)
};