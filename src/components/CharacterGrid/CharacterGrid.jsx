import React from 'react'
import CharacterCard from '../CharacterCard/CharacterCard'
import characters from '../../data/characters.js'
import "./CharacterGrid.css"

export default function CharacterGrid({ searchTerm }) {
  const filteredCharacters = characters.filter(character => 
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="grid-container">
      {filteredCharacters.map(character => (
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
