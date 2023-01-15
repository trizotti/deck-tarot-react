import { useDeck } from '../Deck/useDeck'
import styles from './MainContent.module.css'

function MainContent() {
  const { selectedCard } = useDeck()
  return (
    <main className={styles.pageContent}>
      {selectedCard ? (
        <div className={styles.cardSymbols}>
          <h2>{selectedCard.title}</h2>
          <div>{selectedCard.content}</div>
        </div>
      ) : (
        <div className={styles.cardSymbols}>
          <h2>O deck está embaralhado</h2>
          <div>Selecione uma carta para continuar</div>
        </div>
      )}
    </main>
  )
}

export default MainContent
