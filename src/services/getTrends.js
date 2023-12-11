import { API_URL, API_KEY } from './constants';

const getTrends = () => {
  const URL = `${API_URL}/trending/searches?api_key=${API_KEY}`
  return fetch(URL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      // console.log(data);
      return data.splice(0, 7);
    })
}

export default getTrends;