import React, { useEffect, useState } from 'react'
import { useCard } from './useCard'

export const Card = ({ card }) => {
  const { selectedCardId, flipAnimationClass, cardArt, onCardClick } = useCard(card)
  return (
    <img
      data-testid="cardImage"
      className={flipAnimationClass}
      src={cardArt}
      onClick={() => {
        onCardClick(card)
      }}
    />
  )
}
