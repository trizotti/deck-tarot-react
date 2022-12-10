import React, { useState, useEffect } from 'react'
const publicDirPath = '/tarot-art'

export const Card = ({ card, onCardClick, selectedCardId, lastSelectedCardId }) => {
  const cardArt =
    `${publicDirPath}/` +
    (selectedCardId === card.id ? `${card.id}.jpg` : `back.jpg`)
  const [flipAnimation, setFlipAnimation] = useState('')

  const flip = () => {
    setFlipAnimation('animate__flipInY'),
      setTimeout(() => {
        setFlipAnimation('')
      }, 800)
  }

  useEffect(() => {
    const shouldFlip =
      (lastSelectedCardId === card.id || selectedCardId === card.id) &&
      selectedCardId !== null
    if (shouldFlip) flip()
  }, [selectedCardId])

  return (
    <img
      data-testid="cardImage"
      className={`${
        selectedCardId === card.id ? 'selected' : 'unselected'
      } animate__animated ${flipAnimation}`}
      src={cardArt}
      onClick={() => {
        onCardClick(card)
      }}
    />
  )
}
