const getGifs = ({ keyword }) => {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=3ZKkAdDmGkJ1XVHB0LnFewAfPx08s3y2&q=${keyword}&limit=10&offset=0&rating=pg&lang=en&bundle=messaging_non_clips`
  return fetch(API_URL)
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