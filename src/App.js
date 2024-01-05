import 'App.css';
import Home from 'Pages/Home';
import { GifProvider } from 'context/GifContext';
import { Helmet } from 'react-helmet';

function App() {


  return (
    <>
      <Helmet>
        <title>Giffy app your searcher favorite gif file</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Giffy app your searcher favorite gif file" />
      </Helmet>
      <article className="App">
        <GifProvider>
          <Home />
        </GifProvider>
      </article>
    </>
  );
}

export default App;
