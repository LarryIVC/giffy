import Gif from 'components/Gif'
import Loader from 'components/Loader'
import { useGifs } from 'Hooks/useGifs'
import './ListOfGifs.css'

const ListOfGifs = ({ params }) => {
  if (params === undefined || params === null) {
    params = { keyword: null }
  }
  const { keyword } = params;

  const { loading, gifs, setPage } = useGifs({ keyword })

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1)
  }

  return (
    <section className="App-content">
      {
        loading ? <Loader /> :
          gifs.map(({ url, title, id }) => {
            return (<Gif key={id} title={title} url={url} id={id} />)
          })
      }
      <button onClick={handleNextPage} className='next-page'>Next Page</button>
    </section>
  )
}

export default ListOfGifs