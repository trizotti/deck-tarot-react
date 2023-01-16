import { useDeck } from '../Deck/useDeck'
import { useEffect, useState } from 'react'
export const publicDirPath = location.origin.includes('github')
  ? '/deck-tarot-react/tarot-art'
  : '/tarot-art'

export const useCard = (card) => {
  const { onCardClick, selectedCardId, lastSelectedCardId, shuffleDeck } =
    useDeck()

  const preloadImage = (url, callback) => {
    var img = new Image()
    img.src = url
    img.onload = callback
  }

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
    if (selectedCardId === null) shuffleDeck()

    // Preload images to avoid animation delay when flipping
    preloadImage(cardArtUrl, () => { /* console.log('loaded') */ })
  }, [selectedCardId])

  const flipAnimationClass = `${
    selectedCardId === card.id ? 'selected' : 'unselected'
  } animate__animated ${flipAnimation} ${
    selectedCardId ? '' : 'animate__flipInY '
  }`

  return { flipAnimationClass, cardArtUrl, onCardClick }
}
