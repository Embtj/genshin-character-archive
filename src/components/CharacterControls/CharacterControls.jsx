import React from 'react'
import FilterButton from './FilterButton'
import SortDropdown from './SortDropdown'
import SearchInput from './SearchInput'
import './CharacterControls.css';

export default function CharacterControls({ searchTerm, setSearchTerm, sortOption, setSortOption }) {
  return (
    <div className="character-controls">
        <FilterButton />
        <SortDropdown sortOption={sortOption} setSortOption={setSortOption}/>
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    </div>
  )
}
