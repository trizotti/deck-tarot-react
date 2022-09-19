import React from "react"
const publicDirPath = "/tarot-art"

export const Card = ({ card, onClick, selectedCardId }) => {
  return (
    <img
      data-testid="cardImage"
      className={`${selectedCardId === card.id ? "selected" : "unselected"}`}
      src={`${publicDirPath}/${card.id}.jpg`}
      onClick={() => onClick(card)}
    />
  )
}
