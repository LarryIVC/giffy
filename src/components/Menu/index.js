
import useNearScreen from 'Hooks/useNearScreen';
// import Menu from './Menu';
import './Menu.css';
import { Suspense, lazy } from 'react';
import Loader from 'components/Loader';


const Menu = lazy(
  () => import('./Menu')
)

const LazyMenu = () => {

  const { isNear, elementRef } = useNearScreen({ distance: '0px' })

  return <section ref={elementRef} >
    <Suspense fallback={<Loader />}>
      {isNear ? <Menu /> : null}
    </Suspense>
  </section>
}

export default LazyMenu;
