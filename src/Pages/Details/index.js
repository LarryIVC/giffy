import { useContext } from "react"
import GifsContext from "context/GifContext"
import Gif from "components/Gif"
import './Details.css'

const Detail = ({ params }) => {
  const { gifs } = useContext(GifsContext)
  const gif = gifs.find(gif => gif.id === params.id)

  return (
    <section className="gif-detail-container">
      <Gif {...gif} />
    </section>
  )
}

export default Detail