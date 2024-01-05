import GifsContext from "context/GifContext";
import { useContext, useEffect, useState } from "react";
import getSingleGif from "services/getSingleGif";

const useSingleGif = ({ id }) => {
  const { gifs } = useContext(GifsContext)
  // console.log(gifs)
  const caheGif = gifs.find(gif => gif.id === id)
  // console.log(gif)

  const [gif, setGif] = useState(caheGif)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (!gif) {
      setIsLoading(true)
      getSingleGif({ id })
        .then(gif => {
          setGif(gif)
          setIsLoading(false)
          setIsError(false)
        })
        .catch(err => {
          setIsLoading(false)
          setIsError(true)
        })
    }
  }, [gif, id])
  return { gif, isLoading, isError };
}

export default useSingleGif;