import React from 'react'
import './SearchBar.css'

function searchBar({placeholder, data}) {
  return (
    <div className="search">
        <div className="searchInputs"></div>
            <input type="text" autoFocus placeholder={placeholder}/>
            <div className="searchIcon"></div>
        <div className="dataResult"></div>
        
    </div>
  )
}

export default searchBar