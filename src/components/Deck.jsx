import React from "react"
import { Card } from "./Card"

export const Deck = ({ cards, onCardSelected }) => {
  return (
    <div className="deck">
      <div className="deckListView">
        {cards.map((card) => {
          return <Card key={card.id} card={card} onClick={onCardSelected} />
        })}
      </div>
    </div>
  )
}
