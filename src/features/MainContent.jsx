import React from 'react'
import { useDeck } from '../providers/DeckProvider'

function MainContent() {
  const { selectedCard } = useDeck()
  return (
    <main className="pageContent">
      {selectedCard && (
        <div className="cardSymbols">
          <h2>{selectedCard.title}</h2>
          <div>{selectedCard.content}</div>
        </div>
      )}
    </main>
  )
}

export default MainContent
