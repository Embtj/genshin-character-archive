import React from 'react'
import Header from './components/Header';
import CharacterControls from './components/CharacterControls/CharacterControls';
import CharacterGrid from './components/CharacterGrid/CharacterGrid';

export default function App() {
  return (
    <div>
      <Header />
      <CharacterControls />
      <CharacterGrid />
    </div>
  )
}

