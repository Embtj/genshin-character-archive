import React from 'react'

export default function SortDropdown({ sortOption, setSortOption }) {
  const handleChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="sort-dropdown">
      <label htmlFor="sort" className="visually-hidden">Sort by:</label>
      <select 
        value={sortOption}
        onChange={handleChange}
        name="sort" 
        id="sort"
        className="sort-dropdown-input custom-focus"
        aria-label="Sort characters">
          <option value="" disabled selected hidden>Sort by...</option>
          <option value="element">Element</option>
          <option value="weapon">Weapon</option>
          <option value="alphabetically">A-Z</option>
        </select>
    </div>
  )
}
