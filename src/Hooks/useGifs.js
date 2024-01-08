import { useEffect, useState, useContext } from "react";
import getGifs from "services/getGifs";
import GifContext from "context/GifContext";

const INITIAL_PAGE = 0;
export const useGifs = ({ keyword, rating }) => {
  const { gifs, setGifs } = useContext(GifContext)
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loadingPage, setLoadingPage] = useState(false);
  // console.log('a',keyword)

  const currentKeyword = keyword || localStorage.getItem('lastKeyword') || 'panda';

  // console.log('b',currentKeyword)

  const saveLocalStorage = (keyword) => {
    // if (localStorage.getItem('lastKeyword') !== keyword) {
    keyword && localStorage.setItem('lastKeyword', keyword);
    // setPage(INITIAL_PAGE);
    // }
  }

  useEffect(() => {
    setLoading(true);
    // console.log('c',localStorage.getItem('lastKeyword'))
    // console.log('d',currentKeyword)
    // if (localStorage.getItem('lastKeyword') === currentKeyword) return
    getGifs({ keyword: currentKeyword, rating }).then(gifs => {
      setGifs(gifs)
      setLoading(false);
      saveLocalStorage(currentKeyword)
    });
  }, [setGifs, currentKeyword, rating]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return

    setLoadingPage(true)
    getGifs({ keyword: currentKeyword, page, rating })
      .then(nextsGifs => {
        setGifs(prevGifs => [...prevGifs, ...nextsGifs])
        setLoadingPage(false)
        saveLocalStorage(keyword)
      })

  }, [page, currentKeyword, setGifs, keyword, rating])

  return { loading, gifs, setPage, loadingPage, title: currentKeyword }
}
