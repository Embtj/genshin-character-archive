import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchInput({ searchTerm, setSearchTerm }) {

  return (
    <div className="search-input">
      <input 
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..." 
        className="search-input-field"/>
      <button className="search-input-button"><FontAwesomeIcon icon={faSearch} /></button>
    </div>
  )
}
