import { Link } from 'wouter';
import './Menu.css';
import getTrends from 'services/getTrends'
import { useEffect, useState } from 'react';
import useNearScreen from 'Hooks/useNearScreen';

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

  const {isNear, elementRef} = useNearScreen()

  return <section ref={elementRef} >
    {isNear ? <Menu /> : null}
  </section>
}

export default LazyMenu;
