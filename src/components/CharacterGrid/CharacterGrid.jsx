import React from 'react'
import CharacterCard from '../CharacterCard/CharacterCard'
import characters from '../../data/characters.js'
import "./CharacterGrid.css"

export default function CharacterGrid({ searchTerm, sortOption }) {
  const filteredCharacters = characters.filter(character => 
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const sortedCharacters = [...filteredCharacters];
  
  if (sortOption === "element") {
    sortedCharacters.sort((a, b) => a.element.localeCompare(b.element));
  } else if (sortOption === "weapon") {
    sortedCharacters.sort((a, b) => a.weapon.localeCompare(b.weapon));
  } else if (sortOption === "alphabetically") {
    sortedCharacters.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <section className="grid-container">
      {sortedCharacters.map(character => (
        <CharacterCard
            key={character.id}
            name={character.name}
            image={character.image}
            elementIcon={character.elementIcon}
            rarity={character.rarity}
          />
      ))}
        </section>
  )
}
