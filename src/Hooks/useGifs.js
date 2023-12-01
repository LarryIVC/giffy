import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";

export const useGifs = ({ keyword }) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    setLoading(true);
    const currentKeyword = keyword || localStorage.getItem('lastKeyword') || 'panda';
    getGifs({ keyword: currentKeyword }).then(gifs => {
      setGifs(gifs)
      setLoading(false);
      localStorage.setItem('lastKeyword', keyword);
    });
  }, [keyword]);
  return { loading, gifs }
}
