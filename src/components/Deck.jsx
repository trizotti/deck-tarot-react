import React from "react"
const publicDirPath = location.origin + "/tarot-art"

export const Deck = ({ cards, onCardSelected }) => {
  return (
    <div className="deck">
      <div className="deckListView">
        {cards.map((card) => {
          return (
            <img
              key={card.id}
              src={`${publicDirPath}/${card.id}.jpg`}
              onClick={() => onCardSelected(card)}
            />
          )
        })}
      </div>
    </div>
  )
}
