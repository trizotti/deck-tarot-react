import { useDeck } from '../Deck/useDeck'
import { useEffect, useState } from 'react'

export const publicDirPath = '/tarot-art'

export const useCard = (card) => {
  const { onCardClick, selectedCardId, lastSelectedCardId } = useDeck()
  const cardArtUrl =
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

  const flipAnimationClass = `${
    selectedCardId === card.id ? 'selected' : 'unselected'
  } animate__animated ${flipAnimation}`

  return { flipAnimationClass, cardArtUrl, onCardClick }
}
