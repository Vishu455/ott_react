import React from 'react'
import './search.css';

function Search() {
  return (
    <div>
      <div className="mt-3">
    <form className="search-form d-flex justify-content-center">
        <div className="mr-3">
        <label for="Search" name="search" className="mt-2"></label>
      <input type="text" name="search"/>
      <button type=" var button" className="btn btn-primary text-white">search</button>
      </div>
    </form>
    </div>
    </div>
  )
}

export default Search