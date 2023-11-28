const Gif = ({ id, title, url }) => {
  return (
    <a href={`/#${id}`} >
      <picture key={id}>
        <img src={url} alt={title} />
        <caption>{title}</caption>
      </picture>
    </a>
  )
}

export default Gif;