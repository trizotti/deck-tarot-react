import './App.css'
import React from 'react'
import { ButtonsNav } from './components/ButtonsNav'
import { Deck } from './components/Deck'
import { useState } from 'react'
import { shuffle } from './helpers/deck'
import DeckProvider from './providers/DeckProvider'
import MainContent from './components/MainContent'

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
