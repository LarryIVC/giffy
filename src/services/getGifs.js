import { API_URL, API_KEY } from "./constants";

const getGifs = ({ limit = 6, keyword = 'panda', page = 0 } = {}) => {
  const URL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=pg&lang=en&bundle=messaging_non_clips`
  return fetch(URL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const GIFS = data.map((gif) => {
        const { images, title, id } = gif;
        const { url } = images.original;
        return { title, id, url };
      })
      return GIFS;
    })
}

export default getGifs;