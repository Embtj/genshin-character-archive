import React from 'react'
import "./CharacterCard.css"

export default function CharacterCard({ name, image, elementIcon }) {
  return (
    <article className="character-card">
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
