import Gif from "components/Gif"
import './Details.css'
import useSingleGif from "Hooks/useSingleGif"
import Loader from "components/Loader"
import { Redirect } from "wouter"

const Detail = ({ params }) => {
  console.log(params.id)
  
  const { gif, isLoading, isError } = useSingleGif({ id: params.id })
  console.log(isError)
  if(isLoading) return <Loader />
  if(isError) return <Redirect to='/404' />

  return (
    <section className="gif-detail-container">
      <Gif {...gif} />
    </section>
  )
}

export default Detail