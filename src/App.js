import { useState } from 'react';
import './App.css';

const INITIAL_VALUE = [
  'https://media2.giphy.com/media/TObbUke0z8Mo/200.webp?cid=ecf05e4723w46d8cz68tpsh60rjxvch4wdvch3xxqglfosug&ep=v1_gifs_search&rid=200.webp&ct=g',
  'https://media2.giphy.com/media/nntN4XMNwTzZ6/200.webp?cid=ecf05e4723w46d8cz68tpsh60rjxvch4wdvch3xxqglfosug&ep=v1_gifs_search&rid=200.webp&ct=g'
];
function App() {
  const [value, setValue] = useState([INITIAL_VALUE]);
  return (
    <div className="App">
      <section className="App-content">
        {
          value.map((gif, Index) => <img key={Index} src={gif} alt='Gif' />)
        }

      </section>
    </div>
  );
}

export default App;
