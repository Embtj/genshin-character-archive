import React from 'react'

export default function SortDropdown() {
  return (
    <div className="sort-dropdown">
      <label htmlFor="sort" className="visually-hidden">Sort by:</label>
      <select 
        name="sort" 
        id="sort"
        className="sort-dropdown-input custom-focus"
        aria-label="Sort characters">
          <option value="element" disabled hidden>Sort by...</option>
          <option value="element">Element</option>
          <option value="weapon">Weapon</option>
          <option value="alphabetically">A-Z</option>
        </select>
    </div>
  )
}
