import { Link } from 'wouter';
import './Menu.css';
import getTrends from 'services/getTrends'
import { useEffect, useRef, useState } from 'react';

const Menu = () => {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    getTrends().then(setTrends)
    // const newTrends = trends.splice(0, 7)
    // setTrends(newTrends)
  }, [])

  return (
    <nav className='menu'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        {
          trends.map((trend) => {
            return (
              <li key={trend}>
                <Link to={`/gif/${trend}`}>{trend[0].toUpperCase() + trend.slice(1)}</Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

const LazyMenu = () => {
  const [show, setShow] = useState(false)
  const elementRef = useRef()

  useEffect(() => {

    const onChange = (entries, observer) => {
      const el = entries[0]
      console.log(el.isIntersecting)
      if (el.isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: '100px'
    })

    observer.observe(elementRef.current)

    return () => observer.disconnect()
  }, [show])

  return <section ref={elementRef} >
    {show ? <Menu /> : null}
  </section>
}

export default LazyMenu;
