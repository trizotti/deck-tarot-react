import { useEffect, useRef } from 'react'
import Card from '../Card/Card.jsx'
import { useDeck } from './useDeck.js'
import styles from './Deck.module.css'

export const Deck = () => {
  const { cards, shuffleDeck } = useDeck()

  useEffect(() => {
    shuffleDeck()
  }, [])

  return (
    <div className={styles.deck}>
      <div className={styles.deckListView}>
        {cards.map((card) => {
          return <Card key={card.id} card={card} />
        })}
      </div>
    </div>
  )
}

export default Deck