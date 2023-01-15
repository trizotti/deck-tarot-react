import { useContext } from 'react'
import { DeckContext } from './DeckProvider'

export const useDeck = () => {
  const deckContext = useContext(DeckContext)

  if (!deckContext) {
    throw new Error(
      'useDeck was called without being nested inside deck provider.'
    )
  }

  return deckContext
}
