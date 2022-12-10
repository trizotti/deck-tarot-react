import './App.css'
import React from 'react'
import { ButtonsNav } from './components/ButtonsNav'
import { Deck } from './components/Deck'
import { useState } from 'react'
import tarotCards from './content/tarot.json'
import { shuffle } from './helpers/deck'

function App() {
  const [cards, setCards] = useState(tarotCards)
  const [lastSelectedCardId, setLastSelectedCardId] = useState(null)
  const [selectedCardId, setSelectedCardId] = useState(null)
  const selectedCard = cards.find((card) => card.id === selectedCardId) || null

  const shuffleDeck = () => {
    setLastSelectedCardId(selectedCardId)
    setSelectedCardId(null)
    setCards(shuffle(cards))
  }

  const selectCard = (card) => {
    let newSelected = null
    if (selectedCardId !== card.id) {
      newSelected = card.id
    }
    setLastSelectedCardId(selectedCardId)
    setSelectedCardId(newSelected)
  }

  return (
    <div className="app">
      <ButtonsNav onShuffle={shuffleDeck} />
      <Deck
        cards={cards}
        onCardClick={selectCard}
        selectedCardId={selectedCardId}
        lastSelectedCardId={lastSelectedCardId}
      />
      <main className="pageContent">
        {selectedCard && (
          <div className="cardSymbols">
            <h2>{selectedCard.title}</h2>
            <div>{selectedCard.content}</div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
