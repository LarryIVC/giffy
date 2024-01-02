import { useLocation, Route } from "wouter";
import ListOfGifs from "components/ListOfGifs";
import Menu from "components/Menu";
import Detail from "Pages/Details";
import SearchForm from "components/SearchForm";

const Home = () => {
  const setLocation = useLocation()[1];

  const handleSearchSubmit = ({ keyword }) => {
    console.log('keyword home', keyword)
    setLocation(`/gif/${keyword}`);
  }

  return (
    <>
      <h1>Giffy App</h1>
      <SearchForm onSubmit={handleSearchSubmit} />
      <Menu />
      <Route path='/' >
        <ListOfGifs />
      </Route>
      <Route path='/gif/:keyword' component={ListOfGifs} />
      <Route path='/detail/:id' component={Detail} />
      {/* <Menu /> */}
    </>
  )
}

export default Home