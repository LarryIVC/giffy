import { useState } from "react";

const SearchForm = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState('')

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    console.log('keyword', keyword)
    onSubmit({ keyword: keyword })
  }

  const handleSearchChange = (e) => {
    console.log('e.target.value', e.target.value)
    setKeyword(e.target.value);
  }

  return (
    <form onSubmit={handleSearchSubmit}>
      <input name='search' type='text' onChange={handleSearchChange} value={keyword} placeholder="Search gifs ..." className="search-input" />
      <input type='submit' value='Search' className="search-button" />
    </form>
  )
}

export default SearchForm