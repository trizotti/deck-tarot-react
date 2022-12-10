import React from "react"
import { Card } from "./Card"

export const Deck = ({ cards, onCardClick, selectedCardId, lastSelectedCardId }) => {
  return (
    <div className="deck">
      <div className="deckListView">
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              card={card}
              onCardClick={onCardClick}
              selectedCardId={selectedCardId}
              lastSelectedCardId={lastSelectedCardId}
            />
          )
        })}
      </div>
    </div>
  )
}
