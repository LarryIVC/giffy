import Gif from 'components/Gif'
import Loader from 'components/Loader'
import { useGifs } from 'Hooks/useGifs'
import './ListOfGifs.css'
import useNearScreen from 'Hooks/useNearScreen'
import { useCallback, useEffect, useRef } from 'react'
import debounce from 'just-debounce-it'
import { Helmet } from 'react-helmet'

const ListOfGifs = ({ params }) => {
  // console.log('params', params)
  if (params === undefined || params === null) {
    params = { keyword: null }
  }
  // console.log('params', params)
  const { keyword, rating } = params;
  // console.log('rating', rating)
  const externalRef = useRef()
  const { loading, gifs, setPage, title } = useGifs({ keyword, rating })
  const { isNear } = useNearScreen({ externalRef: loading ? null : externalRef, once: false })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 300
  ), [setPage]);

  useEffect(() => {
    if (isNear) debounceHandleNextPage();
  }, [isNear, debounceHandleNextPage]);

  return (
    <>
      <Helmet>
        <title>Giffy | {decodeURIComponent(title)}</title>
        <meta name="description" content={`Giffy app your searcher favorite gif file | ${decodeURIComponent(keyword)}`} />
      </Helmet>
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
    </>
  )
}

export default ListOfGifs