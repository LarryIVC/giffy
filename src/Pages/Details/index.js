import Gif from "components/Gif"
import './Details.css'
import useSingleGif from "Hooks/useSingleGif"
import Loader from "components/Loader"
import { Redirect } from "wouter"
import { Helmet } from "react-helmet"

const Detail = ({ params }) => {
  console.log(params.id)

  const { gif, isLoading, isError } = useSingleGif({ id: params.id })
  console.log(isError)
  if (isLoading) return <Loader />
  if (isError) return <Redirect to='/404' />

  return (
    <>
      <Helmet>
        <title>Giffy | Details | {gif.title}</title>
        <meta name="description" content={`Giffy app | details for gif file | ${gif.title}`} />
      </Helmet>
      <section className="gif-detail-container">
        <Gif {...gif} />
      </section>
    </>
  )
}

export default Detail