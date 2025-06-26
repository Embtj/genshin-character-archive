import React, { useState } from 'react'
import Header from './components/Header';
import CharacterControls from './components/CharacterControls/CharacterControls';
import CharacterGrid from './components/CharacterGrid/CharacterGrid';

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Header />
      <CharacterControls searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <CharacterGrid searchTerm={searchTerm}/>
    </div>
  )
}

