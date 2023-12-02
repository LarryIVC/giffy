import 'App.css';
import Home from 'Pages/Home';
import { GifProvider } from 'context/GifContext';

function App() {
  

  return (
    <article className="App">
      <GifProvider>
        <Home />
      </GifProvider>
    </article>
  );
}

export default App;
