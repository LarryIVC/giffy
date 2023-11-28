import { keyboard } from '@testing-library/user-event/dist/keyboard';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from 'wouter';

function App() {

  return (
    <article className="App">
      <h1>Giffy App</h1>
      <nav className='menu'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/gif/bolivia'>Bolivia</Link></li>
          <li><Link to='/gif/ecuador'>Ecuador</Link></li>
          <li><Link to='/gif/chile'>Chile</Link></li>
          <li><Link to='/gif/women'>Women</Link></li>
        </ul>
      </nav>

      <Route path='/' >
        <ListOfGifs params={{ keyword: 'random' }} />
      </Route>
      <Route path='/gif/:keyword' component={ListOfGifs} />
    </article>
  );
}

export default App;
