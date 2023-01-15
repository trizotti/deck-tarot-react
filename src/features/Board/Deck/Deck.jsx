import { useEffect, useRef } from 'react'
import Card from '../Card/Card.jsx'
import { useDeck } from './useDeck.js'
import styles from './Deck.module.css'

export const Deck = ({ timeoutAutoSelect  }) => {
  const { cards, shuffleDeck } = useDeck()

  const deckListViewRef = useRef(null)

  const selectFirstCard = () => {
    const firstCard = deckListViewRef.current.children[0]
    firstCard.click()
  }

  useEffect(() => {
    shuffleDeck()
    setTimeout(() => selectFirstCard(), timeoutAutoSelect ? timeoutAutoSelect  : 500)
  }, [])

  return (
    <div className={styles.deck}>
      <div className={styles.deckListView} ref={deckListViewRef}>
        {cards.map((card) => {
          return <Card key={card.id} card={card} />
        })}
      </div>
    </div>
  )
}

export default Deck