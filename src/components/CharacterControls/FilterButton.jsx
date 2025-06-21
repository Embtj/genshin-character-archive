import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

export default function FilterButton({ onClick }) {
  return (
    <button
      type="button"
      className="filter-button"
      onClick={onClick}
      aria-label="Open filter"
    ><FontAwesomeIcon icon={faFilter} />Filter</button>
  )
}
