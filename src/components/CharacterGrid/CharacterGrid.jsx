import React from 'react'
import CharacterCard from '../CharacterCard/CharacterCard'
import characters from '../../data/characters.js'
import "./CharacterGrid.css"

export default function CharacterGrid() {
  return (
    <section className="grid-container">
      {characters.map(character => (
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
