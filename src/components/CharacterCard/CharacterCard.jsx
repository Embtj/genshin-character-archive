import React from 'react'
import "./CharacterCard.css"

export default function CharacterCard({ name, image, elementIcon, rarity }) {
  const rarityClass = rarity === 5 ? "rarity-five" : "rarity-four";

  return (
    <article className={`character-card ${rarityClass}`}>
      <img src={elementIcon} alt="Elemental sign" className="element-sign"/>
      <div className="image-wrapper">
        <img src={image} alt="Character portrait" className="character-portrait" />
      </div>
      <div className="name-bar">
        <h3 className="character-name">{name}</h3>
      </div>
    </article>
  )
}
