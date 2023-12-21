import Gif from 'components/Gif'
import Loader from 'components/Loader'
import { useGifs } from 'Hooks/useGifs'
import './ListOfGifs.css'
import useNearScreen from 'Hooks/useNearScreen'
import { useEffect, useRef } from 'react'

const ListOfGifs = ({ params }) => {
  if (params === undefined || params === null) {
    params = { keyword: null }
  }
  const { keyword } = params;
  const externalRef = useRef()
  const { loading, gifs, setPage } = useGifs({ keyword })
  const { isNear } = useNearScreen({ externalRef: loading ? null : externalRef })

  const handleNextPage = () => {
    console.log('Next Page')
    setPage(prevPage => prevPage + 1)
  }

  // console.log(isNear)

  // const handleNextPage = () => console.log('Next Page')

  useEffect(() => {
    if (isNear) handleNextPage()
  },[isNear])

  return (
    <section className="App-content">
      {
        loading ? <Loader /> :
          gifs.map(({ url, title, id }) => {
            return (<Gif key={id} title={title} url={url} id={id} />)
          })
      }
      <div id='visor' ref={externalRef}></div>
      {/* <button onClick={handleNextPage} className='next-page'>Next Page</button> */}
    </section>
  )
}

export default ListOfGifs