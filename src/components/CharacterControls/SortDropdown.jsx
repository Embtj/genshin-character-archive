import React from 'react'

export default function SortDropdown() {
  return (
    <div className="sort-dropdown">
      <label htmlFor="sort">Sort by</label>
      <select 
        name="sort" 
        id="sort"
        aria-label="Sort characters">
          <option value="element">Element</option>
          <option value="weapon">Weapon</option>
          <option value="alphabetically">Alphabetically</option>
        </select>
    </div>
  )
}
