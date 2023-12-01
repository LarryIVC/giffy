import { Link } from 'wouter'
import './Gif.css'

const Gif = ({ id, title, url }) => {
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

export default Gif;