import './App.css'
import React from 'react'
import { ButtonsNav } from './features/ButtonsNav'
import { Deck } from './features/Board/Deck/Deck'
import DeckProvider from './providers/DeckProvider'
import MainContent from './features/MainContent'

function App() {
  return (
    <DeckProvider>
      <div className="app">
        <ButtonsNav />
        <Deck />
        <MainContent />
      </div>
    </DeckProvider>
  )
}

export default App
