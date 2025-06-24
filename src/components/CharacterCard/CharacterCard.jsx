import React from 'react'
import elementSign from "../../assets/element_anemo.png"
import characterPortrait from "../../assets/sucrose_icon.png"
import "./CharacterCard.css"

export default function CharacterCard() {
  return (
    <section className="grid-container">
      {[...Array(5)].map((_, i) => (
      <article className="character-card" key={i}>
        <img src={elementSign} alt="Elemental sign" className="element-sign"/>
        <div className="image-wrapper">
          <img src={characterPortrait} alt="Character portrait" className="character-portrait" />
        </div>
        <div className="name-bar">
          <h3 className="character-name">Sucrose</h3>
        </div>
      </article>
      ))}
    </section>
    
  )
}
