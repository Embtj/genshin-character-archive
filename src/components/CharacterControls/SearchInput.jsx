import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SearchInput() {
  return (
    <div className="search-input">
      <input type="text" placeholder="Search..." />
      <button><FontAwesomeIcon icon={faSearch} /></button>
    </div>
  )
}
