import { useEffect, useState } from 'react'
import getGifs from '../services/getGifs'
import Gif from './Gif'

const ListOfGifs = ({ params }) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const { keyword } = params;
  useEffect(() => {
    setLoading(true);
    getGifs(keyword).then(gifs => {
      setGifs(gifs)
      setLoading(false);
    });
  }, [keyword]);

  if (loading) return <h1>Loading...😁</h1>
  return (
    <section className="App-content">
      {
        gifs.map(({ url, title, id }) => {
          return (<Gif key={id} title={title} url={url} id={id} />)
        })
      }
    </section>
  )
}

export default ListOfGifs