import { useState } from "react";
import './SearchForm.css'

const RATING_TYPE = ['g', 'pg', 'pg-13', 'r']

const SearchForm = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState('')
  const [rating, setRating] = useState(RATING_TYPE[0])
  const handleSearchSubmit = (e) => {
    e.preventDefault()
    // console.log('keyword', keyword)
    onSubmit({ keyword, rating })
  }

  const handleSearchChange = (e) => {
    // console.log('e.target.value', e.target.value)
    setKeyword(e.target.value);
  }

  const handleChangeRating = (e) => {
    setRating(e.target.value);
  }

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        name="search"
        type="text"
        onChange={handleSearchChange}
        value={keyword}
        placeholder="Search gifs ..."
        className="search-input"
      />
      <input type="submit" value="Search" className="search-button" />
      <select
        value={rating}
        onChange={handleChangeRating}
        className="search-rating"
      >
        <option disabled>Choose rating</option>
        {RATING_TYPE.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
    </form>
  );
}

export default SearchForm