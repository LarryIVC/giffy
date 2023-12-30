import { useContext } from "react"
import GifsContext from "context/GifContext"
import Gif from "components/Gif"
import './Details.css'

const Detail = ({ params }) => {
  console.log(params.id)
  const { gifs } = useContext(GifsContext)
  // console.log(gifs)
  const gif = gifs.find(gif => gif.id === params.id)
  // console.log(gif)

  return (
    <section className="gif-detail-container">
      <Gif {...gif} />
    </section>
  )
}

export default Detail