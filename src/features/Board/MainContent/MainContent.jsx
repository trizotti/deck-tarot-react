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
          <h1>Deck de Tarot com React</h1>
          <br />
          <h2>As cartas foram embaralhadas</h2>
          <br />
          <br />
          <div>Selecione uma carta para continuar</div>
        </div>
      )}
    </main>
  )
}

export default MainContent
