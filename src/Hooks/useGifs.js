import { useEffect, useState, useContext } from "react";
import getGifs from "services/getGifs";
import GifContext from "context/GifContext";

export const useGifs = ({ keyword }) => {
  // const [gifs, setGifs] = useState([]);
  const { gifs, setGifs } = useContext(GifContext)
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    const currentKeyword = keyword || localStorage.getItem('lastKeyword') || 'panda';
    // console.log('ck',currentKeyword);
    // console.log('k',keyword);
    // console.log('l',localStorage.getItem('lastKeyword'));
    getGifs({ keyword: currentKeyword }).then(gifs => {
      setGifs(gifs)
      setLoading(false);
      localStorage.setItem('lastKeyword', keyword);
    });
  }, [keyword, setGifs]);
  return { loading, gifs }
}
