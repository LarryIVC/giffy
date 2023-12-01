import { Link } from 'wouter';
import './Menu.css';

const Menu = () => {
  return (
    <nav className='menu'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/gif/bolivia'>Bolivia</Link></li>
        <li><Link to='/gif/ecuador'>Ecuador</Link></li>
        <li><Link to='/gif/chile'>Chile</Link></li>
        <li><Link to='/gif/women'>Women</Link></li>
      </ul>
    </nav>
  )
}

export default Menu;
