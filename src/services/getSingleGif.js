import { API_URL, API_KEY } from "./constants";

const getSingleGif = ({ id } = {}) => {
  const URL = `${API_URL}/gifs/${id}?api_key=${API_KEY}`
  // console.log(page, limit, URL)
  return fetch(URL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const { images, title, id } = data;
      const { url } = images.original;
      return { title, id, url };
    })  
}

export default getSingleGif;