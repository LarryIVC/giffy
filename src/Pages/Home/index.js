import { useState } from "react";
import { useLocation, Route } from "wouter";
import ListOfGifs from "../../components/ListOfGifs";
import Menu from "../../components/Menu";
import Detail from "../Details";

const Home = () => {
  const [keyword, setKeyword] = useState('');
  const setLocation = useLocation()[1];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setLocation(`/gif/${keyword}`);
    e.value = '';    
  }

  const handleSearchChange = (e) => {

    setKeyword(e.target.value);
  }
  return (
    <>
      <h1>Giffy App</h1>
      <form onSubmit={handleSearchSubmit}>
        <input name='search' type='text' onChange={handleSearchChange} value={keyword} placeholder="Search gifs ..." className="search-input" />
      </form>
      <Menu />
      <Route path='/' >
        <ListOfGifs />
      </Route>
      <Route path='/gif/:keyword' component={ListOfGifs} />
      <Route path='/detail/:id' component={Detail} />
    </>
  )
}

export default Home