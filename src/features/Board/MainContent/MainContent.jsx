import { useDeck } from '../Deck/useDeck'
import styles from './MainContent.module.css'

function MainContent() {
  const { selectedCard } = useDeck()
  return (
    <main className={styles.pageContent}>
      {selectedCard && (
        <div className={styles.cardSymbols}>
          <h2>{selectedCard.title}</h2>
          <div>{selectedCard.content}</div>
        </div>
      )}
    </main>
  )
}

export default MainContent
