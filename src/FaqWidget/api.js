import axios from 'axios';

export function getFaqs() {
  return axios.get('http://ecdwapp01.azurewebsites.net/api/questions', {
    headers: {
      'content-Type': 'application/x-www-form-urlencoded',
    },
  })
  .then(({ data }) => data)
  .catch((res) => res)
};

export function deleteFaqs(id) {
  return axios.delete(`http://ecdwapp01.azurewebsites.net/api/questions/${id}`)
  .then(({ data }) => data)
  .catch((res) => res)
};