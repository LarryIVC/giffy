import { useEffect, useState, useContext } from "react";
import getGifs from "services/getGifs";
import GifContext from "context/GifContext";

const INITIAL_PAGE = 0;
export const useGifs = ({ keyword }) => {
  const { gifs, setGifs } = useContext(GifContext)
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loadingPage, setLoadingPage] = useState(false);
  
  const currentKeyword = keyword || localStorage.getItem('lastKeyword') || 'panda';

  const saveLocalStorage = (keyword) => {
    if (localStorage.getItem('lastKeyword') !== keyword){
      keyword && localStorage.setItem('lastKeyword', keyword);
      setPage(INITIAL_PAGE);
    }
  }

  useEffect(() => {
    setLoading(true);
    if (localStorage.getItem('lastKeyword') === keyword) return
    getGifs({ keyword: currentKeyword }).then(gifs => {
      setGifs(gifs)
      setLoading(false);
      saveLocalStorage(keyword)
    });
  }, [keyword, setGifs, currentKeyword]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return

    setLoadingPage(true)
    getGifs({ keyword: currentKeyword, page })
      .then(nextsGifs => {
        setGifs(prevGifs => [...prevGifs, ...nextsGifs])
        setLoadingPage(false)
        saveLocalStorage(keyword)
      })

  }, [page, currentKeyword, setGifs, keyword])

  return { loading, gifs, setPage, loadingPage }
}
