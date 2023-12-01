import Gif from './Gif'
import Loader from './Loader'
import { useGifs } from '../Hooks/useGifs'

const ListOfGifs = ({ params }) => {
  if (params === undefined || params === null) {
    params = { keyword: null }
  }
  const { keyword } = params;
  
  const { loading, gifs } = useGifs({ keyword })

  return (
    <section className="App-content">
      {
        loading ? <Loader /> :
          gifs.map(({ url, title, id }) => {
            return (<Gif key={id} title={title} url={url} id={id} />)
          })
      }
    </section>
  )
}

export default ListOfGifs