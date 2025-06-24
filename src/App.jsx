import React from 'react'
import Header from './components/Header';
import CharacterControls from './components/CharacterControls/CharacterControls';
import CharacterCard from './components/CharacterCard/CharacterCard';

export default function App() {
  return (
    <div>
      <Header />
      <CharacterControls />
      <CharacterCard />
    </div>
  )
}

