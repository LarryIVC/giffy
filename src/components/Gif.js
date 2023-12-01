import './Gif.css'

const Gif = ({ id, title, url }) => {
  return (
    <a href={`/#${id}`} className='card'>
      <figure>
        <img src={url} alt={title} />
        <figcaption>{title}</figcaption>
      </figure>
    </a>
  )
}

export default Gif;