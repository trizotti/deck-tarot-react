import { useEffect, useState } from 'react'
import { useCard } from './useCard'

export const Card = ({ card }) => {
  const { flipAnimationClass, cardArtUrl, onCardClick } = useCard(card)

  return (
    <img
      data-testid="cardImage"
      className={flipAnimationClass}
      src={cardArtUrl}
      onClick={() => onCardClick(card)}
    />
  )
}

export default Card