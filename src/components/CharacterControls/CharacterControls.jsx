import React from 'react'
import FilterButton from './FilterButton'
import SortDropdown from './SortDropdown'
import SearchInput from './SearchInput'
import './CharacterControls.css';

export default function CharacterControls() {
  return (
    <div className="character-controls">
        <FilterButton />
        <SortDropdown />
        <SearchInput />
    </div>
  )
}
