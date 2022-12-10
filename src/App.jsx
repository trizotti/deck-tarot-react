import "./App.css"
import React from "react"
import { ButtonsNav } from "./components/ButtonsNav"
import { Deck } from "./components/Deck"
import { useState } from "react"
import tarotCards from "./content/tarot.json"
import { shuffle } from "./deck"

function App() {
  const [cards, setCards] = useState(tarotCards)
  const [selectedCardId, setSelectedCardId] = useState(tarotCards[0].id)
  const selectedCard = cards.find((card) => card.id === selectedCardId)

  const shuffleDeck = () => {
    setCards(shuffle(cards))
  }

  const reset = () => {
    setCards(tarotCards)
  }

  const handleSelectedCard = (card) => {
    setSelectedCardId(card.id)
  }

  return (
    <div className="app">
      <ButtonsNav onShuffle={shuffleDeck} onResetClick={reset} />
      <Deck
        cards={cards}
        onCardSelected={handleSelectedCard}
        selectedCardId={selectedCardId}
      />
      <main className="pageContent">
        <div className="cardSymbols">
          <h2>{selectedCard.title}</h2>
          <div>{selectedCard.content}</div>
        </div>
      </main>
    </div>
  )
}

export default App
