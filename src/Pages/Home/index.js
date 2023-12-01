import { useState } from "react";
import { useLocation, Route } from "wouter";
import ListOfGifs from "../../components/ListOfGifs";
import Menu from "../../components/Menu";

const Home = () => {
  const [keyword, setKeyword] = useState('');
  const setLocation = useLocation()[1];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setLocation(`/gif/${keyword}`);
  }

  const handleSearchChange = (e) => {

    setKeyword(e.target.value);
  }
  return (
    <>
      <h1>Giffy App</h1>
      <form onSubmit={handleSearchSubmit}>
        <input type='text' onChange={handleSearchChange} value={keyword} />
      </form>
      <Menu />
      <Route path='/' >
        <ListOfGifs />
      </Route>
      <Route path='/gif/:keyword' component={ListOfGifs} />
    </>
  )
}

export default Home