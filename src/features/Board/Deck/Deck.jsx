import React, { useEffect } from 'react'
import { Card } from '../Card/Card.jsx'
import { useDeck } from '../../../providers/DeckProvider.jsx'

export const Deck = () => {
  const { cards, shuffleDeck } = useDeck()

  useEffect(() => {
    shuffleDeck()
  }, [])

  return (
    <div className="deck">
      <div className="deckListView">
        {cards.map((card) => {
          return <Card key={card.id} card={card} />
        })}
      </div>
    </div>
  )
}
