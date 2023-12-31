import { Link } from 'wouter'
import './Gif.css'
import { memo } from 'react'

const Gif = ({ id, title, url }) => {
  // console.log (id, title, url)
  return (
    <Link to={`/detail/${id}`} >
      <section className='card'>
        <figure>
          <img src={url} alt={title} />
          <figcaption>{title}</figcaption>
        </figure>
      </section>
    </Link>
  )
}

export default memo(Gif);